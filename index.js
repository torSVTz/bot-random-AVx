const { Client, Intents } = require('discord.js');
const dotenv = require('dotenv')

dotenv.config();

const client = new Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES,
    ]
});
const random_num = () => {
    return Math.floor(Math.random() * 10);
}
client.on('ready', () => {
    console.log('bot is ready to ask')
})
client.on('messageCreate', msg => {
    let av = ['RKI-607 โดนหนุ่มไข่โตเย็ด น้ำทะลักเต็มตัว Eimi Fukada', 'SSIS-203 เย็ดสุดเดือดกับสาวนมใหญ่ Rara Anzai', 'SSIS-206 ASMRกับสาวนมคัพJ Asuka Aka',
        'SSIS - 201 หนั งเรื่ องสุดท้ ายของค่ ายกั บสาวนมใหญ่ Yumi Shion', 'NNPJ-474 นัดสาวพาไปเที่ยวแล้วเย็ด', 'KMHRS-055 เดบิวต์สาวสุดน่ารักขาวเนียนอวบ Non Ohana',
        'JUL-740 เมียขายตัวให้ครูหารายได้ Satsuki Ena', 'JUL-739 เย็ดประธานบริษัทรุ่นใหญ่แตกใน Maki Hojo', 'IPX-750 ลักพาตัวลูกสาวไปข่มขืนล้างแค้น Minami Aizawa',
        'IPX-745 เย็ดสาวสวยแตกในบนรถไฟเที่ยวสุดท้าย Tsubasa Amami', 'IPX-744 ข่มขืนน้องสะใภ้ใช้คลิปแบล็คเมล์ Kana Momonogi', 'GVH-273 เย็ดแม่สุดสวยช่วยสอนวิชาเซ็กส์ Yui Hatano',
        'STARS-456 ผลงานเรื่องที่2กับ4ฉากเซ็กส์ Tsukino Hina', 'STARS-428 รุมเย็ดสาวผมสั้นนมใหญ่หุ่นเด็ด5ต่อ1 MINAMO', 'JUL-734 เจ้านายแอบเย็ดกับลูกน้องสาวในออฟิศ Nao Jinguji',
        'JUL-730 หลานเย็ดกับป้าสุดหื่นตื่นมาเย็ด Kinoshita Ririko', 'FSDSS-320 จับเย็ดท่าหมาแบบไม่ทันตั้งตัว Arina Hashimoto', 'DASD-922 ผัวเย็ดไม่ฟินเลยไปแอบกินควยพี่มืด REMI',
        'VEO-047 เดบิวต์สาวรุ่นใหญ่หุ่นดีรับงานเอวี Machimura Kyouko', 'NNPJ-472 นัดเย็ดสาวหุ่นดีมีผู้ติดตามกว่า5หมื่นคน Sumeragi Yuzu', 'NNPJ-471 นัดเย็ดสาวจากแอปหาคู่',
        'JUFE-332 รุมเย็ดไอดอลสาวนมใหญ่รับงานไซด์ไลน์ Asahi Rin', 'JUFE-331 เดบิวต์อดีตช่างเสริมสวยกับแนวสปา', 'BF-644 เย็ดสาวคอสเพลย์ชุดกระต่ายนมใหญ่ Kitano Mina',
        'SSNI-042 คาปากไม่คาใจ Akiho Yoshizawa', 'CAWD-281 เดบิวต์นักศึกษาสาวสวยหุ่นดี Mori Rena', 'WAAA-107 รถไฟหมดค้างห้องรุ่นพี่เย็ดสดแตกใน Satsuki Mei',
        'IPX-632 ซั่มเหมาจ่ายคุณนายประชดชีวิต Nanami Misaki', 'SSNI-154 พ่อผัวตัวดี แอบตีท้าย..ครัว Tsukasa Aoi', 'RDB-746 แม่ม่ายผัวตายเลยเสร็จเจ้านาย Chitose Hara',
        'MIFD-182 เดบิวต์นักศึกษาน่ารักขาวใส Kyoubashi Aoi', 'MIDE-975 เย็ดสดแตกในครั้งแรก Shoko Takahashi', 'SDTH-011 เดบิวต์นักศึกษาอายุ19ปี Kemokemo Ren',
        'NNNC-002 เย็ดสาวน่ารักหุ่นเพรียว Arisu Ruru', 'ADN-346 เมียเล่นชู้กับช่างทำบ้าน Shiratori Minami', 'MIDE-978 ใส่ยาปลุกเซ็กส์แล้วมาเย็ดกัน Nao Jinguji',
        'BAB-032 นัดเย็ดสาวนมใหญ่ในชุดบีกินี่ Yuki Rino', 'ABW-150 พาสาวสวยไปเย็ดที่ออนเซ็น15ยก Yuzuki Yuka', 'SNIS-035 สาวแอร์งานดี แสบหีแอร์ไลน์ Tia',
        'SSNI-879 หงี่เกินเบรคขอเสกดอทิพย์ Tsukasa Aoi & Minami Kojima', 'KUSE-029 เดบิวต์สาวอ้วนนมใหญ่ตูดบึ้มไม่มีเซ็กส์มา6เดือน Ogino Chihiro', 'JUL-251 ชู้รักทะลักถุงยาง Eimi Fukada',
        'VENX-074 เย็ดพี่สาวนมใหญ่ในชุดบีกินนี่ Himesaki Hana', 'CJOD-312 เซ็กส์หมู่4สาวปาร์ตี้ริมสระ Mao Hamasaki , Mitsuki Nagisa , REMI , Hibiki Otsuki', 'NHDTB-578 จับนักเรียนข่มขืนกลางแจ้ง Takashiki Rua , Narita Tsumugi , Nagase Yui',
        'BF-567 พี่สาวขี้เหงาแต่เร้าใจ Saeko Matsushita', 'HMN-048 เย็ดสาวอยากเป็นนักพากย์คาห้องอัด Amano Aoi', '200GANA-2458 เย็ดน้องรินลูกครึ่งไทยญี่ปุ่น Rin Miyazaki',
        'SSIS-183 คบชู้กับเมียเจ้านาย3วัน Aika Yumeno', 'URE-071 สะกดจิตเย็ดครูสาวนมใหญ่ Shiraishi Marina', 'SSIS-196 ฝึก3ประสบการณ์เซ็กส์ดาราหน้าใหม่ Fua Kaede',
        'SSIS-187 จ่าย5พันเย็นเย็ดไม่อั้น Washio Mei', 'SSIS-181 เย็ดเมียลูกจนติดใจ3วันเต็ม Yua Mikami', 'SSIS-182 สปานวดกะปู๋กับพนักงานสาวสวย Tsukasa Aoi',
        'MEYD-703 เย็ดเมียลูก10น้ำจนท้อง Nogi Hotaru', 'JUL-714 เดบิวต์สาวยิ้มสวยหุ่นดีอายุ28ปี Yu Hironaka', 'JUL-710 เดบิต์สาว36นมใหญ่คัพไอ Ogasahara Rui',
        'EBOD-853 เย็ดลูกเลี้ยงนมใหญ่อวบแน่น Kisaki Alice', 'EBOD-855 ลุงเย็ดหลานที่ไม่ได้เจอมา10ปี Takahashi Riho', 'JUL-724 เมียสวยเลยชวนเพื่อนมาร่วมเย็ด Hatsune Minori',
        'IPX-691 แลกน้ำลายกระหายเซ็กส์ Kana Momonogi', 'OFJE-328 รวมผลงาน11เรื่อง8ชั่วโมง Riri Nanatsumori', 'SSIS-172 สาวนมใหญ่แอบเย็ดกับแฟนคนอื่น Rara Anzai',
        'IPX-660 คะน้าจอมฉกก้นกระดกรับกรรม Kana Momonogi', 'IPX-726 เย็ดแฟนสาวแตกคาปาก9น้ำ Kana Momonogi', 'JUL-700 เมียขายตัวหารายได้ช่วยผัว Jinguji Nao',
        'JUL-706 เย็ดสาวขี้เหงาหน้าตู้ปลา Nanase Iori', 'MIDE-972 เย็ดลูกเลี้ยงนมสวยหุ่นเด็ด Tsubasa Aoi', 'SSIS-173 พาสาวไปเดทแล้วเย็ดที่ออนเซ็น Sannomiya Tsubaki',
        'XVSR-610 เมียป่วยเลยแอบเย็ดเพื่อนเมีย Yui Hatano', 'IPX-727 เย็ดสาวรักแรกเมื่อ10ปีก่อน Tsubasa Amami', 'SSIS-175 แอบเย็ดกับพี่สาวแฟนนมใหญ่มาก Asuka Aka',
        'DLDSS-025 เย็ดเพื่อนสาวในที่ทำงาน Mino Suzume', 'IPX-660 คะน้าจอมฉกก้นกระดกรับกรรม Kana Momonogi', 'FSDSS-296 โดนหมอนวดจับเย็ดจนติดใจ Momojiri Kaname',
        'MOGI-001 เดบิวต์สาวน่ารักอายุ26รับงานเอวี Tsubaki Koharu', 'MIAA-496 ไซด์ไลน์แพ็คคู่สาวแว่นนมใหญ่ Matsumoto Nanami,Yoshine Yuria', 'NNPJ-469 พาสาวหุ่นดีผมสั้นสุดน่ารักมาเย็ดที่ห้อง Tsukino Runa',
        'JUL-251 ชู้รักทะลักถุงยาง Eimi Fukada', 'STARS-443 เดบิวต์สาวผมสั้นนมสวย Tsukino Hina', 'CAWD-277 จับเย็ดแตกในคาเต็นท์ Sakura Moko',
        'ATID-475 เมียเจ้านายคบชู้จ้างพี่มืดเย็ด2รู Seina Arisa', 'ATID-477 พี่มืดข่มขืนหมอนวดรุ่นใหญ่ Oda Mako', 'DASD-900 ชู้รัก ปรุงรส Akari Mitani',
        'MIDE-964 เปิดซิงเพื่อนหนุ่ม10น้ำที่ออนเซ็น Shoko Takahashi', 'PPPD-272 นมมหากาฬ น้ำบานกระจุย Horikita Nanami', 'ONSG-032 นักเรียนวัยกิ๊ก ซอยยิกคานม Rui Miura',

    ]
    if (msg.content == 'code av') {
        msg.reply(av[random_num()])

    }
})
client.login(process.env.TOKEN)