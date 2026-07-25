"use client";

import * as Dialog from "@radix-ui/react-dialog";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { MetallicLogo } from "@/components/ui/metallic-logo";
import { navigation } from "@/content/site";

export function MobileMenu() {
  return (
    <Dialog.Root>
      <Dialog.Trigger className="menu-trigger" aria-label="Mở điều hướng">
        <Menu size={21} aria-hidden="true" />
        <span>Menu</span>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="menu-overlay" />
        <Dialog.Content className="mobile-menu" aria-describedby={undefined}>
          <div className="mobile-menu__top">
            <MetallicLogo compact />
            <Dialog.Close className="menu-close" aria-label="Đóng điều hướng">
              <X size={22} aria-hidden="true" />
            </Dialog.Close>
          </div>
          <Dialog.Title className="sr-only">Điều hướng chính</Dialog.Title>
          <nav aria-label="Điều hướng di động">
            <ul>
              {navigation.map((item, index) => (
                <li key={item.href}>
                  <Dialog.Close asChild>
                    <Link href={item.href}>
                      <span className="mobile-menu__index">0{index + 1}</span>
                      <span>
                        <strong>{item.label}</strong>
                        <small>{item.description}</small>
                      </span>
                    </Link>
                  </Dialog.Close>
                </li>
              ))}
              <li>
                <Dialog.Close asChild>
                  <Link href="/support">
                    <span className="mobile-menu__index">07</span>
                    <span>
                      <strong>Hỗ trợ</strong>
                      <small>Thông tin và phản hồi</small>
                    </span>
                  </Link>
                </Dialog.Close>
              </li>
            </ul>
          </nav>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
