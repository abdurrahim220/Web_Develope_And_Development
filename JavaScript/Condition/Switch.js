console.log("Select an option:\n a.Option 1 \n b.Option 2\n c.Option 3");
choice = prompt();

var test;

switch(choice)
{
    case "a" : //if(choice == a)
        test = "Option 1 selected!";
        break;
    case "b" :
        test = "Option 2 selected!";
        break;
    case "c" :
        test = "Option 3 selected!";
        break;

    default:
        test = "No option is selected!";
        break;
}

console.log(test);