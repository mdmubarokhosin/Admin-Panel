"use client";

import { MailComponent } from "./_components/mail";
import { mails } from "./_components/data";
import { DEFAULT_MAIL_LAYOUT } from "./_components/mail-layout-config";

export default function Page() {
  return (
    <div className="h-dvh min-h-0 overflow-hidden">
      <MailComponent mails={mails} defaultLayout={[...DEFAULT_MAIL_LAYOUT]} />
    </div>
  );
}
