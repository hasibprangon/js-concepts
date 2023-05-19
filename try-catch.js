function checkAge() {
    //    console.log('hello');
    const ageField = document.getElementById('age');
    const ageText = ageField.value;
    const errorField = document.getElementById('error');
    try {
        // console.log(hello);
        const age = parseInt(ageText);
        if(isNaN(age)){
           throw "Pleage Enter a number";
        }
        else if(age < 18){
            throw "Under 18 is not allowed";
        }
        errorField.innerHTML= '';
    }
    catch (err) {
        console.log('Error:',err);
        errorField.innerHTML =  err;
    }
    
    finally{
        console.log('All done inside try catch');
    }
    console.log(1111);
}

checkAge();