function insert(num)
{
    var number = document.getElementById('result').innerHTML;
    document.getElementById('result').innerHTML = number + num;

}

function clean ()
{
    document.getElementById('result').innerHTML = "";
}

function back()
{
    var result = document.getElementById('result').innerHTML;
    document.getElementById('result').innerHTML = result.substring(0, result.length -1);
}