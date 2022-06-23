$(function () {
    "use strict";
    var num1, num2, answer, operation = 0;

    var add = function (num1, num2) {
        var sum = num1 + num2;
        return sum;
    };
    var subtract = function (num1, num2) {
        var diff = num1 - num2;
        return diff;
    };
    var multiply = function (num1, num2) {
        var product = num1 * num2;
        return product;
    };
    var divide = function (num1, num2) {
        var quotient = num1 / num2;
        return quotient.toFixed(4);
    };

    $(".button").click(function () {
        var value = document.getElementById(this);
        switch (value) {
            case "zero":
                if (typeof(operation) == "string") {
                    num2 = 0;
                } else {
                    num1 = 0;
                }
                $("#display").append("0");
                break;
            case "one":
                if (typeof(operation) == "string") {
                    num2 = 1;
                } else {
                    num1 = 1;
                }
                $("#display").append("1");
                break;
            case "two":
                if (typeof(operation) == "string") {
                    num2 = 2;
                } else {
                    num1 = 2;
                }
                $("#display").append(2);
                break;
            case "three":
                if (typeof(operation) == "string") {
                    num2 = 3;
                } else {
                    num1 = 3;
                }
                $("#display").append(3);
                break;
            case "four":
                if (typeof(operation) == "string") {
                    num2 = 4;
                } else {
                    num1 = 4;
                }
                $("#display").append(4);
                break;
            case "five":
                if (typeof(operation) == "string") {
                    num2 = 5;
                } else {
                    num1 = 5;
                }
                $("#display").append(5);
                break;
            case "six":
                if (typeof(operation) == "string") {
                    num2 = 6;
                } else {
                    num1 = 6;
                }
                $("#display").append(6);
                break;
            case "seven":
                if (typeof(operation) == "string") {
                    num2 = 7;
                } else {
                    num1 = 7;
                }
                $("#display").append(7);
                break;
            case "eight":
                if (typeof(operation) == "string") {
                    num2 = 8;
                } else {
                    num1 = 8;
                }
                $("#display").append(8);
                break;
            case "nine":
                if (typeof(operation) == "string") {
                    num2 = 9;
                } else {
                    num1 = 9;
                }
                $("#display").append(9);
                break;
            case "add":
                operation = "+";
                break;
            case "subtract":
                operation = "-";
                break;
            case "multiply":
                operation = "*";
                break;
            case "divide":
                operation = "/";
                break;
            case "equals":
                if (operation == "+") {
                    answer = add(num1, num2);
                    $("#display").html(answer);
                } else if (operation == "-") {
                    answer = subtract(num1, num2);
                    $("#display").html(answer);
                } else if (operation == "*") {
                    answer = multiply(num1, num2);
                    $("#display").html(answer);
                } else if (operation == "/") {
                    answer = divide(num1, num2);
                    $("#display").html(answer);
                }
                else {
                    return;
                }
                break;
            case "clear":
                num1 = "";
                num2 = "";
                operation = 0;
                answer = "";
                $("#display").html(0);
                break;
        }
    });
});