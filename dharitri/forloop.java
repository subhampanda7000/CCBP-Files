package dharitri;
import java.util.Scanner;

public class forloop {
    public static void main(String[] args) {
        int sum=0;
        Scanner sc=new Scanner(System.in);
        int num=sc.nextInt();
        
        for(int i=1;i<=num;i++){
            if(i%2==0){
                System.out.println(i);
                sum+=i;
            }
            
        }
        System.out.println("The sum of n even num is:"+sum);
        
        }
    }

