


#Å´powershell 5

Remove-Item -Confirm:$false -Recurse:$true tmp

mkdir tmp
$SPECFILE="tmp/spec.json"
$SPECURL="https://localhost:44320/swagger/v1/swagger.json"

# $ROOTPATH=$PSSCRIPTROOT
$ROOTPATH=(Get-Location).Path

Invoke-WebRequest -Uri $SPECURL -OutFile $SPECFILE

docker run --rm --net=host `
    -v ${ROOTPATH}:/local `
    swaggerapi/swagger-codegen-cli:2.4.23 `
    generate `
    -i /local/$SPECFILE `
    -l typescript-angular `
    -o /local/src/swagger-client `
    --additional-properties ngVersion=12.2.0

