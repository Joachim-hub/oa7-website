"use client";

import { motion } from "framer-motion";
import { Mail, MessageCircle, Video } from "lucide-react";
import type { CommunicationChannel } from "@/data/process";
import { SectionHeader } from "@/components/shared/SectionHeader";

const CHANNEL_ICONS: Record<string, typeof Mail> = {
  Email: Mail,
  WhatsApp: MessageCircle,
  "Scheduled calls": Video,
};

export function CommunicationWorkflow({ channels }: { channels: CommunicationChannel[] }) {
  return (
    <section className="py-24 md:py-30" aria-labelledby="communication-heading">
      <div className="container-oa7">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <SectionHeader
            eyebrow="Staying in touch"
            title="Communication, without the noise"
            description="You'll always know what channel to use and when to expect a reply, instead of guessing whether a message landed."
          />

          <ul className="divide-y divide-border-subtle border-y border-border-subtle">
            {channels.map((item, i) => {
              const Icon = CHANNEL_ICONS[item.channel] ?? Mail;
              return (
                <motion.li
                  key={item.channel}
                  initial={{ opacity: 0, x: 12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.4, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  className="flex items-start gap-4 py-6"
                >
                  <Icon className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent-ink" aria-hidden="true" />
                  <div>
                    <p className="font-semibold text-secondary-0">{item.channel}</p>
                    <p className="mt-1 text-sm leading-relaxed text-secondary-500">{item.purpose}</p>
                  </div>
                </motion.li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
