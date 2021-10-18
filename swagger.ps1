


#Å´powershell 5

Remove-Item -Confirm:$false -Recurse:$true projects\foo-swagger-client\src
Remove-Item -Confirm:$false -Recurse:$true tmp

mkdir tmp
$SPECFILE="tmp/spec.json"
$SPECURL="https://localhost:44320/swagger/v1/swagger.json"

wget --quiet --no-check-certificate $SPECURL -O $SPECFILE

Invoke-WebRequest -Uri $SPECURL -OutFile $SPECFILE

docker run --rm --net=host `
    -v D:\src\js\angular\foo-swagger:/local `
    swaggerapi/swagger-codegen-cli:2.4.23 `
    generate `
    -i /local/$SPECFILE `
    -l typescript-angular `
    -o /local/projects/foo-swagger-client/src `
    --additional-properties ngVersion=12.2.0

