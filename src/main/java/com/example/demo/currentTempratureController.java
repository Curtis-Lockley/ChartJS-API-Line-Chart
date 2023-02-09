package com.example.demo;
import java.text.DecimalFormat;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;

@RestController
public class currentTempratureController {

    @GetMapping("/currentTemprature")
    public double currentTemprature() {
	  //Generate random number to act as temprature
	  int min = 10;
	  int max = 50;
	  double temprature = min + Math.random() * (max - min);
	  //Ensure number is returned with only 2 decimal places
	  DecimalFormat df = new DecimalFormat("0.00");
      return Double.parseDouble(df.format(temprature));
    }

}