const data = [undefined,2,3,4,5,'sd'];

const func = function (first = "Error", second, third, ...others) {
    if(arguments.length < 5){ console.log('Error') };
    console.log(`${first}-${second}-${third}`);
    console.log({...others});
}

func(...data);