var fs = require('fs');

fs.readFile("/usr/lib/modules/5.15.0-73-generic/kernel/drivers/gpu/drm/amd/amdgpu/amdgpu.ko", (err,data) =>
{
    if(data){
        console.log(data);
    }
    else if(err){
        throw err;
    }
} );

j = 0;

for(let i = 0; i <1000; i++){    //Notice how this for loop execute before the readFile function. This is because fs.readFile() gets executed asynchronously.
    j += i;
}
console.log(j);