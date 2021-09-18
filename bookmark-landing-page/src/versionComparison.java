import java.util.*;

class Test {
    public static void main(String[] args) {
        
        String vers1="", vers2="";

        Scanner keyboard = new Scanner(System.in);

        System.out.print("Please enter first version: ");
        vers1 = keyboard.nextLine();
        System.out.print("Please enter next version: ");
        vers2 = keyboard.nextLine();


        //This checks and compares the versions. Since
        //the version numbers starts as strings, they are converted to doubles
        //so that they can be compared.
        if(Double.parseDouble(vers1) < Double.parseDouble(vers2))
            System.out.println(vers1 + " is smaller than " + vers2);
        else if(Double.parseDouble(vers1) > Double.parseDouble(vers2))
            System.out.println(vers1 + " is bigger than " + vers2);
        else if(Double.parseDouble(vers1) == Double.parseDouble(vers2))
            System.out.println("They are both equal versions!");


    }
}