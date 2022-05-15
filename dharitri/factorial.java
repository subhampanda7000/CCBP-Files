package dharitri;
import java.util.*;

public class factorial {
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        int num=sc.nextInt();
        int fac=1;
       /* for(int i=num;i>=1;i--){
            fac*=i;
            System.out.print(i+" x ");
        }
        System.out.println(" = "+fac);  
       */
      
       while (num>=1){
           fac*=num;
           num--;
       }
       System.out.println(fac);
    }
}
