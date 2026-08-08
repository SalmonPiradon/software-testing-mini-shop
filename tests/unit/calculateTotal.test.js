import { describe, test, expect } from "vitest";
import { calculateTotal } from "../../src/utils/calculateTotal.js";

describe("calculateTotal", () => {
    // เขียน test() ตามตาราง Test Case ด้านล่าง
    test("คำนวณราคารวมถูกต้องเมื่อ quantity มากกว่า 1", () => {
        const price = 100;
        const quantity = 3;
        const total = calculateTotal(price, quantity);
        expect(total).toBe(300);
    });

    test("คำนวณราคารวมถูกต้องเมื่อ quantity เป็น 1", () => {
        const price = 100;
        const quantity = 1;
        const total = calculateTotal(price, quantity);
        expect(total).toBe(100);
    });

    test("คืนค่า 0 เมื่อ price เป็น 0 แต่ quantity ถูกต้อง", () => {
        const price = 0;
        const quantity = 5;
        const total = calculateTotal(price, quantity);
        expect(total).toBe(0);
    });

    test("คืนค่า 0 เมื่อ quantity เป็น 0", () => {
        const price = 100;
        const quantity = 0;
        const total = calculateTotal(price, quantity);
        expect(total).toBe(0);
    });

    test("คืนค่า 0 เมื่อ quantity น้อยกว่า 0", () => {
        const price = 100;
        const quantity = -2;
        const total = calculateTotal(price, quantity);
        expect(total).toBe(0);
    });

    test("throw error เมื่อ price ติดลบ", () => {
        const price = -10;
        const quantity = 2;
        expect(() => calculateTotal(price, quantity)).toThrow("ราคาต้องไม่ติดลบ");
    });

});