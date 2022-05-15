package dharitri;


import java.util.*;

public class ArrayAndList {
	public static void main(String[] args) {
		String[] array={"Java","Python","PHP","C++"};  
		System.out.println("Printing Arr:"+Arrays.toString(array));
		
		// Converting list To array
		
		List<String>list_a= new ArrayList<String>();
		
		for (String a :array) {
			list_a.add(a);
		}
		System.out.println("Printing Lst: "+list_a);
		
		//Sorting of List
		
		List<Integer>int_list=new ArrayList<Integer>();
		System.out.println(int_list); //Prints Blank List
		int_list.add(110);
		int_list.add(20);
		int_list.add(350);
		int_list.add(45);
		int_list.add(25);
		
		System.out.println(int_list); //Unsorted List
		
		Collections.sort(int_list);		
		
		System.out.println("The sorted List is:"+int_list);
	}
}
