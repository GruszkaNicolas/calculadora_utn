
function sumar() { 
    let num1
    num1= document.getElementById('primerNumero').value;
    let num2
    num2= document.getElementById ('segundoNumero').value;
    
        if (num1 != '' && num2 !='') {
        let resolucion
        resolucion = parseInt(num1) + parseInt(num2)
            console.log('El resultado de la suma es ' + resolucion)
            document.getElementById("resultado").innerHTML = resolucion;
        } else { alert('Por favor introducir ambos numeros para realizar la operación')
            
        }
    }

    function restar() { 
        let num1
        num1= document.getElementById('primerNumero').value;
        let num2
        num2= document.getElementById ('segundoNumero').value;
        
            if (num1 != '' && num2 !='') {
            let resolucion
            resolucion = parseInt(num1) - parseInt(num2)
                console.log('El resultado de la resta es ' + resolucion)
                document.getElementById("resultado").innerHTML = resolucion;
        
            } else { alert('Por favor introducir ambos numeros para realizar la operación')
                
            }
        }
        
        function multiplicar() { 
            let num1
            num1= document.getElementById('primerNumero').value;
            let num2
            num2= document.getElementById ('segundoNumero').value;
            
                if (num1 != '' && num2 !='') {
                let resolucion
                resolucion = parseInt(num1) * parseInt(num2)
                document.getElementById("resultado").innerHTML = resolucion;
                    console.log('El resultado de la multiplicación es ' + resolucion)
            
                } else { alert('Por favor introducir ambos numeros para realizar la operación')
                    
                }
            }
            
            function dividir() { 
                let num1
                num1= document.getElementById('primerNumero').value;
                let num2
                num2= document.getElementById ('segundoNumero').value;
                
                    if (num1 != '' && num2 !='') {
                    let resolucion
                    resolucion = parseInt(num1) / parseInt(num2)
                        console.log('El resultado de la division es ' + resolucion)
                        document.getElementById("resultado").innerHTML = resolucion;
                
                    } else { alert('Por favor introducir ambos numeros para realizar la operación')
                        
                    }
                }
                

