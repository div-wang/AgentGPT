import React from "react";
import { FaDiscord, FaGithub, FaTwitter } from "react-icons/fa";
import Dialog from "./Dialog";

export default function HelpDialog({
  show,
  close,
}: {
  show: boolean;
  close: () => void;
}) {
  return (
    <Dialog header="扫码加入微信群，获得更多帮助" isShown={show} close={close}>
      <div className="text-md relative flex-auto p-2 leading-relaxed">
        <p className="px-32">
          <img src="https://chat.redtom.com/assets/wangguanghui-8d0ca30d.png" width="280" ></img>
        </p>
        {/* <div className="mt-4 flex w-full items-center justify-center gap-5">
          <div
            className="cursor-pointer rounded-full bg-black/30 p-3 hover:bg-black/70"
            onClick={() =>
              window.open("https://discord.gg/jdSBAnmdnY", "_blank")
            }
          >
            <FaDiscord size={30} />
          </div>
          <div
            className="cursor-pointer rounded-full bg-black/30 p-3 hover:bg-black/70"
            onClick={() =>
              window.open(
                "https://twitter.com/asimdotshrestha/status/1644883727707959296",
                "_blank"
              )
            }
          >
            <FaTwitter size={30} />
          </div>
          <div
            className="cursor-pointer rounded-full bg-black/30 p-3 hover:bg-black/70"
            onClick={() =>
              window.open("https://github.com/reworkd/多变 Auto-GPT", "_blank")
            }
          >
            <FaGithub size={30} />
          </div>
        </div> */}
      </div>
    </Dialog>
  );
}
