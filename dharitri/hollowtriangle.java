package dharitri;
import java.util.*;
public class hollowtriangle {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        System.out.println(" ".repeat(n-1)+"*");  // first line
        int k=1;
        for (int i=2;i<n;i++){
            String space = " ".repeat(n-i);
            String hSpace = " ".repeat(k);
            System.out.println(space+"*"+hSpace+"*");
            k+=2;
        }
        System.out.println("* ".repeat(n)); // last line
    }
}

   
