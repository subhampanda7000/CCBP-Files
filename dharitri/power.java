package dharitri;
import java.util.*;

public class power {
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        int num;
        int power;
        int result=1;
        System.out.println("Enter a number:");
        num=sc.nextInt();
        System.out.println("Enter a power");
        power=sc.nextInt();
        for(int i=1;i<=power;i++){
            result*=num;
           
        }
        System.out.println(result);

    }
    
}
