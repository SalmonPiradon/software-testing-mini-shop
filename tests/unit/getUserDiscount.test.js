import { vi, describe, test, expect } from "vitest";
import { getUserDiscount } from "../../src/services/getUserDiscount.js";

describe("getUserDiscount", () => {
    // เขียน test() ตามตาราง Test Case ด้านล่าง
    test("คืนส่วนลด 20 สำหรับ user ระดับ gold", () => {
        const userId = 1;
        const userRepository = {
            findById: vi.fn().mockReturnValue({ id: 1, membership: "gold" })
        };
        const discount = getUserDiscount(userId, userRepository);
        expect(discount).toBe(20);
    });

    test("คืนส่วนลด 10 สำหรับ user ระดับ silver", () => {
        const userId = 2;
        const userRepository = {
            findById: vi.fn().mockReturnValue({ id: 2, membership: "silver" })
        };
        const discount = getUserDiscount(userId, userRepository);
        expect(discount).toBe(10);
    });

    test("คืนส่วนลด 0 สำหรับ user ระดับ basic", () => {
        const userId = 3;
        const userRepository = {
            findById: vi.fn().mockReturnValue({ id: 3, membership: "basic" })
        };
        const discount = getUserDiscount(userId, userRepository);
        expect(discount).toBe(0);
    });

    test("throw error เมื่อไม่พบ user (null)", () => {
        const userId = 999;
        const userRepository = {
            findById: vi.fn().mockReturnValue(null)
        };
        expect(() => getUserDiscount(userId, userRepository)).toThrow("ไม่พบ user นี้ในระบบ");
    });

    test("throw error เมื่อไม่พบ user (undefined)", () => {
        const userId = 1000;
        const userRepository = {
            findById: vi.fn().mockReturnValue(undefined)
        };
        expect(() => getUserDiscount(userId, userRepository)).toThrow("ไม่พบ user นี้ในระบบ");
    });

    test("เรียก findById ด้วย userId ที่ถูกต้องเพียงครั้งเดียว", () => {
        const userId = 5;
        const userRepository = {
            findById: vi.fn().mockReturnValue({ id: 5, membership: "silver" })
        };
        getUserDiscount(userId, userRepository);
        expect(userRepository.findById).toHaveBeenCalledWith(userId);
        expect(userRepository.findById).toHaveBeenCalledTimes(1);
    });
});