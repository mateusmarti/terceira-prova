let resp = document.getElementById("res")
            function go() {
                let qf = Number(document.getElementById("fun").value)
                let c = 1
                
                let s = 0
                let med = 0

                let mai = 0
                let men = 0
                
                while (c <= qf) {
                    let sal = Number(prompt(`Qual é o salário do ${c}º Funcionário`))
                    
                    s += sal
                    med = s / qf

                    if (c == 1) {
                        mai = sal
                        men = sal
                    }
                    else {
                        if (sal > mai) {
                            mai = sal
                        }
                        else if (sal < men) {
                            men = sal
                        }
                    }  
                    c++
                }  
                res.innerHTML = `A empresa, ao todo gasta R$${s.toFixed(2)} por mês.<br>A média de salário dos funcionários é R$${med.toFixed(2)}<br>O maior salário da empresa é R$${mai.toFixed(2)}<br>O menor salário da empresa R$${men.toFixed(2)}`
                return false  
            }
        