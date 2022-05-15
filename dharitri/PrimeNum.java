package dharitri;
import java.util.*;

public class PrimeNum {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int num = sc.nextInt();
        
        for (int j=2;j<=num;j++){
            int factor=0;
            for(int i=2;i<j;i++){
                if (j % i==0){
                    factor+=1;
                }
            }
            if (factor==0){
                System.out.print(j+" ");
            }
       
        }

    }
}
