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
    intro:
      "工学部aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    icon: "https://images.unsplash.com/photo-1610216705422-caa3fcb6d158?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29ufGVufDB8MnwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 1,
    name: "中島 亮子",
    intro: "工学部",
    icon: "https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8MnwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 2,
    name: "小川 真琴",
    intro: "教育学部",
    icon: "https://images.unsplash.com/photo-1620360424948-0013488258f6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1048&q=80",
  },
  {
    id: 3,
    name: "沢田 美津枝	",
    intro: "理学部",
    icon: "https://images.unsplash.com/photo-1425082661705-1834bfd09dca?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=755&q=80",
  },
  {
    id: 4,
    name: "石黒 稔郎",
    intro: "農学部",
    icon: "https://images.unsplash.com/photo-1546182990-dffeafbe841d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=740&q=80",
  },
  {
    id: 5,
    name: "中西 雅義",
    intro: "教育学部",
    icon: "https://images.unsplash.com/photo-1554384645-13eab165c24b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80",
  },
  {
    id: 6,
    name: "秋山 睦男",
    intro: "理学部",
    icon: "https://images.unsplash.com/photo-1564860924912-f27764fd2ab6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
  },
  {
    id: 7,
    name: "岡 志奈",
    intro: "人文社会学部",
    icon: "https://images.unsplash.com/photo-1578309756213-4ae60733ad6f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 8,
    name: "長島 眞美",
    intro: "農学部",
    icon: "https://images.unsplash.com/photo-1555169062-013468b47731?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
  },
  {
    id: 9,
    name: "安井 嘉郎",
    intro: "工学部",
    icon: "https://images.unsplash.com/photo-1596120717723-48797f590ccb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 10,
    name: "飯田 喜重",
    intro: "教育学部",
    icon: "https://images.unsplash.com/photo-1488866022504-f2584929ca5f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=743&q=80",
  },
  {
    id: 11,
    name: "日野 直幸",
    intro: "理学部",
    icon: "https://images.unsplash.com/photo-1577886433362-b6d3c0b9addd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=984&q=80",
  },
  {
    id: 12,
    name: "竹本 慎治",
    intro: "工学部",
    icon: "https://images.unsplash.com/photo-1542368814023-a892de27462d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 13,
    name: "神谷 尊則",
    intro: "人文社会学部",
    icon: "https://images.unsplash.com/photo-1534794048419-48e110dca88e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=648&q=80",
  },
  {
    id: 14,
    name: "村山 譲介",
    intro: "農学部",
    icon: "https://images.unsplash.com/photo-1486551937199-baf066858de7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=846&q=80",
  },
  {
    id: 15,
    name: "白井 ひびき",
    intro: "理学部",
    icon: "https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80",
  },
  {
    id: 16,
    name: "水谷 成子",
    intro: "教育学部",
    icon: "https://images.unsplash.com/photo-1468276311594-df7cb65d8df6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80",
  },
  {
    id: 17,
    name: "西川 明久",
    intro: "人文社会学部",
    icon: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80",
  },
  {
    id: 18,
    name: "河野 雄一郎",
    intro: "工学部",
    icon: "https://images.unsplash.com/photo-1463453091185-61582044d556?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
  },
  {
    id: 19,
    name: "横井 厚哉",
    intro: "理学部",
    icon: "https://images.unsplash.com/photo-1444393299901-d5270ace5365?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 20,
    name: "高島 恒宏",
    intro: "工学部",
    icon: "https://images.unsplash.com/photo-1575503802870-45de6a6217c8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
  },
  {
    id: 21,
    name: "浅野 清名",
    intro: "教育学部",
    icon: "https://images.unsplash.com/photo-1525909002-1b05e0c869d8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80",
  },
  {
    id: 22,
    name: "石黒 奈緒実",
    intro: "農学部",
    icon: "https://images.unsplash.com/photo-1457530378978-8bac673b8062?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
  },
];

const MemberPage: VFC = () => {
  return (
    <div className="flex flex-col w-full h-full bg-snow-800">
      <div className="flex flex-row mx-[32px] mt-[32px] mb-[40px] w-full h-[50px] leading-[50px]">
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
                      className="flex flex-row mx-[32px] mb-[32px] w-full h-[50px] leading-[50px]"
                    >
                      <img
                        className="mr-[16px] w-[50px] h-[50px] rounded-full"
                        src={item.icon}
                      />
                      <p className="flex flex-shrink-0 mr-[16px] w-[192px] text-[18px] truncate">
                        {item.name}
                      </p>
                      <p className="flex mr-[32px] text-[18px] truncate">
                        {item.intro}
                      </p>
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
                        className="flex flex-row mx-[32px] mb-[32px] w-full h-[50px] leading-[50px]"
                      >
                        <img
                          className="mr-[16px] w-[50px] h-[50px] rounded-full"
                          src={item.icon}
                        />
                        <p className="flex flex-shrink-0 mr-[16px] w-[192px] text-[18px] truncate">
                          {item.name}
                        </p>
                        <p className="flex mr-[32px] text-[18px] truncate">
                          {item.intro}
                        </p>
                      </div>
                    );
                  }
                })}
              </Disclosure.Panel>
              <Disclosure.Button
                className={`text-brand hover:underline text-[18px] mb-[8px]
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
