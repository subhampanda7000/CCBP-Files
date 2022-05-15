package dharitri;
import java.util.*;

public class conditional {
    public static void main(String[] args) {

       /* Scanner sc  = new Scanner(System.in);
        System.out.println("Enter Your Age: ");
        int a=sc.nextInt();
        int b=sc.nextInt();
        int c=sc.nextInt();
        
        if (a>b && a>c){
            System.out.println("a is greater");

        }
        else if (b>a && b>c){
            System.out.println("b is greater");

        }
        else {
            System.out.println("c is greater");
        }
    */
    Scanner sc  = new Scanner(System.in);
    int year= sc.nextInt();

    if (year%4==0){
        if(year % 100==0){
            if (year % 400==0){
                System.out.println("Leap Year");
            }
            else{
                System.out.println("Not Leap Year");
            }
        }
        else{
            System.out.println("Leap Year");
        }
        
    }
    else{
        System.out.println("Not Leap Year");      
    }






    }
}
