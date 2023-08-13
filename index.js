//switch, case, break, default

var digit = parseInt(prompt("Enter a digit from 0-9: "));
document.write("Your digit is : " + digit + "<br/>");

switch(digit){
    case 0:
        document.write("The Spelling of the digit " + digit  + " is <b> Zero </b>");
        break;
        case 1:
        document.write("The Spelling of the digit " + digit  + " is <b> One </b>");
        break;
        case 2:
        document.write("The Spelling of the digit " + digit  + " is <b> Two </b>");
        break;
        case 3:
        document.write("The Spelling of the digit " + digit  + " is <b> Three </b>");
        break;
        case 4:
        document.write("The Spelling of the digit " + digit +  " is <b> Four </b>");
        break;
        case 5:
        document.write("The Spelling of the digit " + digit  + " is <b> Five </b>");
        break;
        case 6:
        document.write("The Spelling of the digit " + digit  + " is <b> Six </b>");
        break;
        case 7:
        document.write("The Spelling of the digit " + digit  + " is <b> Seven </b>");
        break;
        case 8:
        document.write("The Spelling of the digit " + digit  + " is <b> Eight </b>");
        break;
        case 9:
        document.write("The Spelling of the digit " + digit + " is <b> Nine </b>");
        break;
    default:
        document.write("This " + digit + " is not a digit from one to 9 ");
}

