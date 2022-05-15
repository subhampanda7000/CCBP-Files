package dharitri;
import java.util.Arrays;
import java.util.List;

public class arr {
    public boolean isPrime(int a){
        boolean prime =false;
        int factor=0;
        if (a==2){
            prime=true;
        }
        else {
            for (int i = 2; i<a ; i++){
                if (a%i==0){
                factor+=1;
                }
                if (factor==0){
                prime=true;
                }
            }
        }
    
        return prime;
    }

    public static void main(String[] args) {
        
       // List a = new ArrayList();
       List a = Arrays.asList(1, 2, 3,"sub");
        /*for (int i : a){
            boolean c = obj.isPrime(i);
            if (c==true){
                System.out.println(i);
            }
        }*/
        System.out.println(a);

    }
}