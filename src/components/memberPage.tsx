import type { VFC, Fragment } from "react";
import { Disclosure } from "@headlessui/react";

type member = {
  id: number;
  name: string;
  intro?: string;
};

const member = [
  {
    id: 0,
    name: "金城 理絵",
    intro: "工学部",
    icon: "https://images.unsplash.com/photo-1610216705422-caa3fcb6d158?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29ufGVufDB8MnwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 1,
    name: "中島 亮子",
    intro: "工学部",
    icon: "https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8MnwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  { id: 2, name: "小川 真琴", intro: "教育学部", icon: "" },
  { id: 3, name: "沢田 美津枝	", intro: "理学部", icon: "" },
  { id: 4, name: "石黒 稔郎", intro: "農学部", icon: "" },
  { id: 5, name: "中西 雅義", intro: "教育学部", icon: "" },
  { id: 6, name: "秋山 睦男", intro: "理学部", icon: "" },
  { id: 7, name: "岡 志奈", intro: "人文社会学部", icon: "" },
  { id: 8, name: "長島 眞美", intro: "農学部", icon: "" },
  { id: 9, name: "安井 嘉郎", intro: "工学部", icon: "" },
  { id: 10, name: "飯田 喜重", intro: "教育学部", icon: "" },
  { id: 11, name: "日野 直幸", intro: "理学部", icon: "" },
  { id: 12, name: "竹本 慎治", intro: "工学部", icon: "" },
  { id: 13, name: "神谷 尊則", intro: "人文社会学部", icon: "" },
  { id: 14, name: "村山 譲介", intro: "農学部", icon: "" },
  { id: 15, name: "白井 ひびき", intro: "理学部", icon: "" },
  { id: 16, name: "水谷 成子", intro: "教育学部", icon: "" },
  { id: 17, name: "西川 明久", intro: "人文社会学部", icon: "" },
  { id: 18, name: "河野 雄一郎", intro: "工学部", icon: "" },
  { id: 19, name: "横井 厚哉", intro: "理学部", icon: "" },
  { id: 20, name: "高島 恒宏", intro: "工学部", icon: "" },
  { id: 21, name: "浅野 清名", intro: "教育学部", icon: "" },
  { id: 22, name: "石黒 奈緒実", intro: "農学部", icon: "" },
];

const MemberPage: VFC = () => {
  return (
    <div className="flex flex-col w-full h-full bg-snow-800">
      <div className="flex flex-row mx-[32px] mt-[32px] mb-[40px] w-full h-[50px]">
        <p className="mr-[16px] w-[256px] text-[18px]">メンバー名</p>
        <p className="text-[18px]">自己紹介</p>
      </div>
      <Disclosure
        as="div"
        className="justify-center justify-items-center items-center text-center"
      >
        {({ open }) => {
          return (
            <>
              {member.map((item, index) => {
                if (index < 20) {
                  return (
                    <div
                      key={item.id}
                      className="flex flex-col w-full h-full bg-snow-800"
                    >
                      <div className="flex flex-row mx-[32px] w-full h-[50px] leading-[50px]">
                        <img
                          className="mr-[16px] w-[50px] h-[50px] rounded-full"
                          src={item.icon}
                        />
                        <p className="flex mr-[16px] w-[192px] text-[18px]">
                          {item.name}
                        </p>
                        <div className="flex mr-[32px] text-[18px]">
                          {item.intro}
                        </div>
                      </div>
                    </div>
                  );
                }
              })}
              <Disclosure.Panel
                as="div"
                className={`${member.length <= 20 ? "invisible " : ""}`}
              >
                {member.map((item, index) => {
                  if (index >= 20) {
                    return (
                      <div
                        key={item.id}
                        className="flex flex-col w-full h-full bg-snow-800"
                      >
                        <div className="flex flex-row mx-[32px] w-full h-[50px] leading-[50px]">
                          <img
                            className="mr-[16px] w-[50px] h-[50px] rounded-full"
                            src={item.icon}
                          />
                          <div className="flex mr-[16px] w-[192px] text-[18px]">
                            {item.name}
                          </div>
                          <div className="flex mr-[32px] text-[18px]">
                            {item.intro}
                          </div>
                        </div>
                      </div>
                    );
                  }
                })}
              </Disclosure.Panel>
              <Disclosure.Button
                className={`
                  ${member.length <= 20 ? "invisible " : ""}`}
              >
                {open ? "閉じる" : "もっと表示"}
              </Disclosure.Button>
            </>
          );
        }}
      </Disclosure>
    </div>
  );
};

export default MemberPage;
