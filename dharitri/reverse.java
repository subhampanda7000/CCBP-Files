package dharitri;
import java.util.*;
/*
Write a program that prompts the user to input an integer and then outputs 
the number with the digits reversed. For example, 
if the input is 12345, the output should be 54321.
*/

public class reverse {
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);                          //12345
        int num=sc.nextInt();
        String s=Integer.toString(num);
        int l = s.length();
        String rev="";
        for(int i=l-1; i>=0; i--){
            rev+=s.charAt(i);

        }
        System.out.println(rev);
        
    
        


        
    }
}
