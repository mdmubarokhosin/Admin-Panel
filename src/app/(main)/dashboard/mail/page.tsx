"use client";

import { MailComponent } from "@/app/(main)/mail/_components/mail";
import { mails } from "@/app/(main)/mail/_components/data";
import { DEFAULT_MAIL_LAYOUT } from "@/app/(main)/mail/_components/mail-layout-config";

export default function Page() {
  return (
    <div className="h-[calc(100dvh-8rem)] min-h-0 overflow-hidden">
      <MailComponent mails={mails} defaultLayout={[...DEFAULT_MAIL_LAYOUT]} />
    </div>
  );
}
