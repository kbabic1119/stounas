$ftpHost = "anona.serveriai.lt"
$username = "stounas@stounas.lt"
$password = "Stounas123"
$localFolder = "c:\Users\ASUS\Desktop\MBstounas\dist"

function Upload-File {
    param ($localPath, $remotePath)
    $uri = "ftp://$ftpHost/$remotePath"
    Write-Host "Uploading $localPath to $uri..."
    try {
        $request = [System.Net.FtpWebRequest]::Create($uri)
        $request.Credentials = New-Object System.Net.NetworkCredential($username, $password)
        $request.Method = [System.Net.WebRequestMethods+Ftp]::UploadFile
        
        $bytes = [System.IO.File]::ReadAllBytes($localPath)
        $request.ContentLength = $bytes.Length
        $requestStream = $request.GetRequestStream()
        $requestStream.Write($bytes, 0, $bytes.Length)
        $requestStream.Close()
        $response = $request.GetResponse()
        $response.Close()
        Write-Host "Success!"
    } catch {
        $ex = $_.Exception
        Write-Error "Failed to upload $($localPath): $($ex.Message)"
    }
}

# Ensure the assets directory exists on the remote FTP server
try {
    $dirUri = "ftp://$ftpHost/public_html/assets"
    $request = [System.Net.FtpWebRequest]::Create($dirUri)
    $request.Credentials = New-Object System.Net.NetworkCredential($username, $password)
    $request.Method = [System.Net.WebRequestMethods+Ftp]::MakeDirectory
    $response = $request.GetResponse()
    $response.Close()
    Write-Host "Created assets directory on remote."
} catch {
    # Ignore if folder already exists
}

# Recursively upload all files in dist/
$files = Get-ChildItem -Path $localFolder -Recurse -File
foreach ($file in $files) {
    # Get path relative to $localFolder
    $relative = $file.FullName.Substring($localFolder.Length).TrimStart("\/").Replace("\", "/")
    $remotePath = "public_html/$relative"
    Upload-File -localPath $file.FullName -remotePath $remotePath
}

Write-Host "Deployment completed!"
