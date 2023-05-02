<template>
  <div class="viewport p-6">
    <a-breadcrumb class="mt-2">
      <a-breadcrumb-item>首页</a-breadcrumb-item>
      <a-breadcrumb-item>学校概括</a-breadcrumb-item>
    </a-breadcrumb>
    <main class="m-auto">
      <h1 class="text-3xl text-center font-bold py-8">青岛枣山小学</h1>
      <div class="flex mt-4">
        <div class="px-8 py-4 w-8/12">
          <section>
            <h3 class="section-title">
              <span>
                <s-icon :name="FileListFill" />
              </span>
              学校简介
            </h3>
            <div v-html="beautifyText(jianjie || '')" />
          </section>
          <section>
            <h3 class="section-title">
              <span>
                <s-icon :name="EditCircleFill" />
              </span>
              办学特色
            </h3>
            <div v-html="beautifyText(banxue || '')" />
          </section>
          <section>
            <h3 class="section-title">
              <span>
                <s-icon :name="GroupFill" />
              </span>
              办学理念
            </h3>
            <div v-html="beautifyText(linian || '')" />
          </section>
          <section>
            <h3 class="section-title">
              <span>
                <s-icon :name="AwardFill" />
              </span>
              师资水平
            </h3>
            <div v-html="beautifyText(shizi || '')" />
          </section>
          <section>
            <h3 class="section-title">
              <span>
                <s-icon :name="BubbleChart" />
              </span>
              校园文化
            </h3>
            <div v-html="beautifyText(xiaoyuan || '')" />
          </section>
          <section>
            <h3 class="section-title">
              <span>
                <s-icon :name="BookOpen" />
              </span>
              课程设置
            </h3>
            <div v-html="beautifyText(kcsz || '')" />
          </section>
        </div>
        <div class="w-4/12 pl-8">
          <ul class="bg-gray-50 border-t-4 border-blue-600 p-4">
            <li class="mb-4">
              <img src="@/assets/material/imp.jpg" />
            </li>
            <li class="mb-4">
              <img src="@/assets/material/imp2.jpg" />
            </li>
            <li class="mb-4">
              <img src="@/assets/material/imp3.jpg" />
            </li>
          </ul>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import {
  FileListFill,
  EditCircleFill,
  GroupFill,
  AwardFill,
  BubbleChart,
  BookOpen,
} from '@salmon-ui/icons'
import { beautifyText } from '@/lib/utils'

const jianjie =
  '\r\n青岛枣山小学是李沧区2014年新建学校，位于李沧区华楼山路11号，占地20000余平方米.学校规划设计36个班，有设施一流的风雨操场、心理咨询室、生命探究空间、机器人教室、图书馆、综合实验室、自动录播室、校园电视台、海洋探秘馆、创客家艺空间、生命探究空间等专业教室和辅助设施，高标准、现代化的硬件设施为师生提供了良好的学习、生活氛围。\r\n'
const banxue =
  '\r\n一百年前，康有为先生购刘氏土地于惠山，期冀往生之年，卧靠惠山，面朝大海 朵朵花开:一百年后，于此刻往前五年，一座以办一所滋养学生童年的学校为愿景的现代化小学应运而生。\r\n2014年建校以来，以"坚实起步，奠基人生”的办学理念为引领，实施课程育人。从"国家课程校本化优质实施、学校课程的特色化实施"两个层面，构建了提升核心素养学生的课程体系。积学启智、恒者行远的校训，与康先生的警世名言"犀象至庞大，人熊御之:虎豹鸷猛，人能伏之。惟其任智而学也。"不谋而合。学校注重提升教学品质，提出实施"智趣"教育，打造智趣灵动、自主探究"的教学文化，开启"智趣课堂"，让课堂充满智慧和趣味，追求教学高效。坚持"晨诵、午写、暮读”，为学生打好人生的底色。构架了“枣花朵朵开学校课程体系，确定了枣山学子发展的六个方面的核心素养，着力打造"智趣灵动、自主探究"的教学文化，打造"爱满枣山、润物无声’的德育品牌。\r\n在致力于课程改革的同时，学校注重打造艺体和科技特色，百余名学生在全国、省市级比赛中获奖。学校先后在体育、科技、艺术等各级各类比塞中获奖无数，多次获得各级各类称号。'
const linian =
  '\r\n办学宗旨:精彩人生从这里坚实起步\r\n办学目标:爱生活、会思辨、善才艺、有道德的阳光学子\r\n学校愿景:个性发展的乐园 探索求知的学园现代特色的校园\r\n学校文化主题:厚积如山学校精神:携手攀登\r\n校训:积学启智恒者行远校风:博采养趣雅习健行教风:勤勉治教慧心育人学风:学于点滴志行千里'
const shizi =
  '\r\n青岛惠山小学拥有一支高堂历年文国子力、轻化、业务精良的教师队伍。学校现阶段有在职教师76人。其中省特级教师1人，省教学能手1人。青岛市优秀教师4人，青岛市学科带头人3人，青岛市教学能手8人，青岛市德育先进工作者2人。有49人次在全国省市级比赛中获奖。\r\n教师队伍充满活力，阳光向上。学历层次相对较高，教师科学研究的意识和能力较强，积极开展“微课题”实验。2014年学校制定了“名师、骨干、青优三级教师发展梯队，实施“青蓝”教师培养工程，教师成长一直处于上升期。干部队伍团结有创新力，能够与教师紧密相容，威信高，行动力强。'
const xiaoyuan =
  '\r\n环境文化--温馨+雅致;管理文化--人文+制度;\r\n课程文化--传承+创新:课堂文化--求实+高效;\r\n教师文化--有爱+自律;服务文化--细致+暖心'
const kcsz =
  '\r\n青岛枣山小学贯彻国家课程、地方课程和校本课程三级管理体制，认真执行国家和地方课程计划，遵循课程改革原则，全面安排基础性课程和拓展性课程。以“多彩课程、幸福童年"为课程建设目标，围绕"厚积如山"的课程理念，成立课程开发小组，从国家课程，学校课程、社团活动、社会实践四个层面开展课程建设。加强三种整合--长短课程整合、三级课程整合、学科内容整合。打造四个板块--群体参与的必修理休现精淇的社团理，精彩纷呈的选课、体现精湛的社团课、精彩纷呈的选修课、走向校外的社会课。\r\n学校充分发挥学校课程和综合实践活动课的整体功能，不断完善"枣花朵朵开”课程体系，重视STEM课程的研究，尊重人的成长规律和教育规律，对学生进行德育、智育、体育、美育和劳动技术教育，促进学生全面发展，学有所长.'
</script>

<style lang="scss" scoped>
.section-title {
  @apply flex items-center border-dashed border-b-2 border-b-gray-200 text-xl;
  span {
    @apply text-xl leading-none bg-green-600 text-white inline-flex items-center justify-center h-10 w-10 rounded mr-2;
  }
}
</style>
