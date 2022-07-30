function karatsuba (x,y){
    const basic = 10;
    if(x<basic || y<basic){
        return x*y
    }
    const string_X = x.toString();
    const string_Y = y.toString();
    const n = (string_X.length > string_Y.length) ? string_Y.length : string_X.length;
    // as the first step of algoritm we need to take our numbers and to cut them in two parts "left" and "right"
    const x_number_left = parseInt(string_X.substring(0,string_X.length-Math.round(n/2)));
    const x_number_right = parseInt(string_X.substring(string_X.length-Math.round(n/2),string_X.length)) ;

    const y_number_left = parseInt(string_Y.substring(0,string_Y.length-Math.round(n/2)));
    const y_number_right = parseInt(string_Y.substring(string_Y.length-Math.round(n/2),string_Y.length)) ;

    // we need 3 recursive expressions for karatsuba
    const exp1 = karatsuba(x_number_left,y_number_left); 
    const exp2 = karatsuba(x_number_right,y_number_right);
    const exp3 = karatsuba((x_number_right+x_number_left),(y_number_right+y_number_left));
    // and one special expression
    const exp4 = exp3-exp2-exp1
    // and the last finall expression which will be our solution
    const end = (exp1 * Math.pow(10, n ) + exp2 + exp4 * Math.pow(10,  Math.round(n/2)));
    
    
    
    return end;
}
var x = 3141592653589793238462643383279502884197169399375105820974944592;
var y = 2718281828459045235360287471352662497757247093699959574966967627;
console.log(karatsuba(x,y));
console.log(karatsuba(1234,1456));
console.log(1234*1456)