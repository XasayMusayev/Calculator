let btn = document.getElementById('calc')

btn.onclick=()=>{

    let amount = parseInt(document.getElementById('amount').value)
    let percent = parseInt(document.getElementById('percent').value)
    let month = parseInt(document.getElementById('month').value)

    if (isNaN(amount) || isNaN(percent) || isNaN(parseInt)) {
        document.getElementById('result').innerHTML=`Enter number`
        
    }

    let netice=amount*percent/100
    let netice2=amount+netice
    let monthl = netice2/month
    let monthly = monthl.toFixed(2)

    document.getElementById('result').innerHTML=`${monthly} AZN`

    


}