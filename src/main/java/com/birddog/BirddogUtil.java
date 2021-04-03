package com.birddog;

public class BirddogUtil {

    /***
     *
     * @param text
     * @param objects
     */
    public static void debug(String text, Object... objects){
        System.out.println(String.format(text, objects));
    }

    /***
     *  @param src
     * @param action
     * @param text
     * @param values
     */
    public static void debug(String src, String action, String text, Object... values) {
        System.out.println(String.format("[%s] (%s) ", src, action) + String.format(text, values));
    }
}
