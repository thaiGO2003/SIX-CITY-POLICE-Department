import type { Law } from "@/content/types";

const sourceRoot = "https://sites.google.com/view/upd-jetray/l-s-p-d";

const source = (label: string, url = sourceRoot) => ({
  label,
  url,
  status: "canonical" as const,
});

export const laws: Law[] = [
  {
    slug: "quyen-va-nghia-vu-canh-sat",
    title: "Quyền và nghĩa vụ cảnh sát",
    category: "duty",
    categoryLabel: "Nghiệp vụ & roleplay",
    summary: "Phạm vi kiểm tra hành chính, duy trì trật tự và xử lý trong tình huống RP.",
    sections: [
      {
        id: "kiem-tra-hanh-chinh",
        title: "Kiểm tra hành chính",
        paragraphs: [
          "Cảnh sát có thể kiểm tra hành chính khi có vi phạm giao thông, dấu hiệu tình nghi, tại khu vực xảy ra trộm cướp hoặc theo chuyên đề của văn phòng Cảnh sát trưởng.",
          "Nội dung kiểm tra hành chính gồm căn cước, bằng lái và cốp trước/sau của phương tiện khi phù hợp với tình huống.",
        ],
      },
      {
        id: "giu-trat-tu",
        title: "Giữ trật tự tại hiện trường",
        paragraphs: [
          "Cảnh sát có quyền giải tán đám đông tại khu vực ban ngành, nơi xảy ra cướp, điều tra tội phạm hoặc nơi có báo cáo mất trật tự công cộng.",
          "Khi đơn vị đang điều tra tại đồn hoặc hiện trường, người không có phận sự phải tránh gây ồn ào và tuân theo hướng dẫn của lực lượng làm nhiệm vụ.",
        ],
      },
      {
        id: "phoi-hop",
        title: "Phối hợp trong tình huống",
        paragraphs: [
          "Phương tiện cảnh sát đang bật đèn, còi và truy đuổi được xem là phương tiện ưu tiên. Công dân cần nhường đường và không cản trở nhiệm vụ.",
          "Khi đã có bằng chứng phù hợp theo quy định, cảnh sát có thể áp giải đối tượng về đồn để xử lý.",
        ],
      },
    ],
    relatedSlugs: ["roleplay-cong-dan", "roleplay-si-quan", "luat-phuong-tien"],
    lastReviewed: "Nguồn Google Sites",
    source: source("Quyền và nghĩa vụ cảnh sát", "https://sites.google.com/view/upd-jetray/quyền-và-nghĩa-vụ-cảnh-sát"),
  },
  {
    slug: "roleplay-cong-dan",
    title: "Quy tắc roleplay dành cho công dân",
    category: "duty",
    categoryLabel: "Nghiệp vụ & roleplay",
    summary: "Quyền, trách nhiệm và cách phối hợp của công dân trong các tình huống với SCPD.",
    sections: [
      {
        id: "giay-to",
        title: "Giấy tờ và quyền phản ánh",
        paragraphs: [
          "Công dân cần mang căn cước; người điều khiển phương tiện cần có bằng lái khi tham gia giao thông.",
          "Người chơi có quyền tố cáo hoặc phản ánh hành vi sai trái của nhân sự ban ngành khi có bằng chứng cụ thể và làm việc trực tiếp với người có thẩm quyền.",
        ],
      },
      {
        id: "tai-hien-truong",
        title: "Tại hiện trường",
        paragraphs: [
          "Không khiêu khích để diễn ra giao tranh, gây ồn ào hoặc cản trở tại hiện trường. Hãy tuân theo yêu cầu giữ trật tự, nhường đường cho xe ưu tiên và rời khu vực khi được hướng dẫn.",
          "Khi bị triệu tập, công dân cần đến đồn làm việc theo yêu cầu và giữ thái độ tôn trọng trong toàn bộ tình huống.",
        ],
      },
      {
        id: "bi-bat",
        title: "Khi bị bắt hoặc gián đoạn kỹ thuật",
        paragraphs: [
          "Khi đã bị còng, không thực hiện hành động đòi hỏi sử dụng tay như gọi điện hoặc thao tác không phù hợp với tình huống RP.",
          "Nếu cần rời máy, gặp crash hoặc lỗi kỹ thuật, hãy báo cho cảnh sát và tiếp tục tình huống sau khi kết nối lại theo hướng dẫn.",
        ],
      },
    ],
    relatedSlugs: ["quyen-va-nghia-vu-canh-sat", "luat-phuong-tien"],
    lastReviewed: "Nguồn Google Sites",
    source: source("Đối với người dân", "https://sites.google.com/view/upd-jetray/luật-roleplay/đối-với-người-dân"),
  },
  {
    slug: "roleplay-si-quan",
    title: "Quy tắc roleplay dành cho sĩ quan",
    category: "duty",
    categoryLabel: "Nghiệp vụ & roleplay",
    summary: "Chuẩn mực tác phong, điều kiện on-duty và quy trình xử lý của sĩ quan SCPD.",
    sections: [
      {
        id: "tac-phong",
        title: "Tác phong và tính liêm chính",
        paragraphs: [
          "Sĩ quan phải giao tiếp chuẩn mực, tôn trọng công dân và không có hành vi toxic, lạm quyền, thiên vị hoặc bao che.",
          "Nghiêm cấm tuồn vật chứng, sử dụng trang bị hoặc phương tiện đặc chủng sai mục đích, hay tham gia hoạt động trái với quy định của ngành.",
        ],
      },
      {
        id: "quy-trinh",
        title: "Quy trình xử án",
        paragraphs: [
          "Quy trình cơ bản gồm: yêu cầu tháo mặt nạ khi phù hợp, chào và giới thiệu, kiểm tra giấy tờ, kiểm tra đối tượng, thông báo tội danh và mức xử lý, sau đó tiến hành xử phạt.",
          "Trong kiểm tra hành chính, sĩ quan phải duy trì thái độ hòa nhã và tác phong chuyên nghiệp.",
        ],
      },
      {
        id: "on-duty",
        title: "Điều kiện làm nhiệm vụ",
        paragraphs: [
          "Sĩ quan on-duty phải mặc đồng phục, sử dụng phương tiện được cấp, duy trì liên lạc ổn định và có bodycam/hình ảnh để hỗ trợ xử lý khiếu nại.",
          "Khi vào khu vực nguy hiểm, cần dùng tín hiệu phù hợp và không camp khu vực cấm.",
        ],
      },
    ],
    relatedSlugs: ["quyen-va-nghia-vu-canh-sat", "pit-va-truy-duoi"],
    lastReviewed: "Nguồn Google Sites",
    source: source("Đối với LSPD", "https://sites.google.com/view/upd-jetray/luật-roleplay/đối-với-lspd"),
  },
  {
    slug: "luat-phuong-tien",
    title: "Luật phương tiện",
    category: "traffic",
    categoryLabel: "Giao thông & phương tiện",
    summary: "Quy định về giấy tờ, tốc độ, đỗ xe, xe ưu tiên và các hành vi giao thông.",
    sections: [
      {
        id: "giay-to-va-so-huu",
        title: "Giấy tờ và quyền sở hữu",
        paragraphs: [
          "Không mang căn cước hoặc bằng lái khi bị kiểm tra hành chính bị xử lý theo từng loại giấy tờ. Sử dụng xe không chính chủ có thể bị phạt, giam xe và tịch thu vật phẩm vi phạm theo quy định.",
          "Mức chuộc xe được công bố tại nguồn là 1.000$ cho mỗi phương tiện.",
        ],
      },
      {
        id: "luu-thong",
        title: "Lưu thông an toàn",
        paragraphs: [
          "Các chuyên đề tốc độ được áp dụng khi có thông báo; giới hạn nguồn hiện hành nêu 100 km/h trong thành phố, 140 km/h ngoài thành phố và 160 km/h trên cao tốc.",
          "Không vượt đèn đỏ, đi ngược chiều, lạng lách, đánh võng, bốc đầu, chở quá số người hoặc gây tai nạn rồi bỏ chạy.",
        ],
      },
      {
        id: "phuong-tien-uu-tien",
        title: "Xe ưu tiên và phương tiện đặc biệt",
        paragraphs: [
          "Công dân phải nhường đường cho xe ưu tiên đang làm nhiệm vụ. Cản trở cảnh sát trong tình huống truy đuổi có thể dẫn đến việc áp chế và xử lý tại chỗ.",
          "Không sử dụng xe ban ngành, xe doanh nghiệp hoặc phương tiện thuộc diện cấm sai mục đích RP.",
        ],
      },
    ],
    relatedSlugs: ["luat-sua-xe", "pit-va-truy-duoi", "roleplay-cong-dan"],
    lastReviewed: "Nguồn Google Sites",
    source: source("Luật phương tiện", "https://sites.google.com/view/upd-jetray/luật-phương-tiện/luật-phương-tiện"),
  },
  {
    slug: "luat-sua-xe",
    title: "Luật sửa xe",
    category: "traffic",
    categoryLabel: "Giao thông & phương tiện",
    summary: "Giới hạn sửa, đổi và cất phương tiện trong truy đuổi hoặc thời gian truy vết.",
    sections: [
      {
        id: "nguoi-dan",
        title: "Người dân và tội phạm",
        paragraphs: [
          "Trong lúc truy đuổi hoặc còn thời gian truy vết, nghiêm cấm sử dụng lệnh hay bộ kit sửa xe.",
          "Nếu có mechanic trong ca, người dân được sửa tại gara theo quy định; sau khi sửa không được đổi, cất hoặc độ xe trong cùng tình huống.",
        ],
      },
      {
        id: "canh-sat",
        title: "Cảnh sát",
        paragraphs: [
          "Trong quá trình truy đuổi, cảnh sát cần hạn chế sửa xe khi vẫn có thể tiếp tục nhiệm vụ. Ngoài truy đuổi, việc sửa xe được phép.",
        ],
      },
    ],
    relatedSlugs: ["luat-phuong-tien", "pit-va-truy-duoi"],
    lastReviewed: "Nguồn Google Sites",
    source: source("Luật sửa xe", "https://sites.google.com/view/upd-jetray/luật-phương-tiện/luật-sửa-xe"),
  },
  {
    slug: "luat-vu-khi",
    title: "Luật vũ khí",
    category: "security",
    categoryLabel: "An ninh & vũ khí",
    summary: "Khai báo, mang, sử dụng và kiểm tra lý lịch vũ khí trong RP.",
    sections: [
      {
        id: "khai-bao",
        title: "Khai báo và kiểm tra",
        paragraphs: [
          "Người sở hữu vũ khí phải khai báo để xác nhận chính chủ. Khi có căn cứ kiểm tra, cảnh sát có thể kiểm tra lý lịch, giấy phép và tình trạng sở hữu của vũ khí.",
          "Vũ khí không đăng ký seri, không có giấy phép hoặc không chính chủ được xử lý theo luật tàng trữ.",
        ],
      },
      {
        id: "su-dung",
        title: "Sử dụng vũ khí",
        paragraphs: [
          "Không cầm vũ khí ngoài tình huống hợp lệ. Mọi trường hợp sử dụng phải được xây dựng theo diễn biến ingame và không gây sát thương trái quy định tại khu vực công cộng hoặc khu vực an toàn.",
        ],
      },
    ],
    relatedSlugs: ["luat-tang-tru", "giao-tranh-voi-canh-sat"],
    lastReviewed: "Nguồn Google Sites",
    source: source("Luật vũ khí", "https://sites.google.com/view/upd-jetray/luật-vũ-khí/luật-vũ-khí"),
  },
  {
    slug: "luat-tang-tru",
    title: "Luật tàng trữ",
    category: "security",
    categoryLabel: "An ninh & vũ khí",
    summary: "Quy định tịch thu vật phẩm, tiền bẩn, công cụ và vũ khí khi kiểm tra hợp lệ.",
    sections: [
      {
        id: "vat-pham",
        title: "Vật phẩm vi phạm",
        paragraphs: [
          "Dụng cụ làm bẩn, tiền bẩn và vật phẩm liên quan được tịch thu bắt buộc khi cảnh sát có quyền kiểm tra người hoặc phương tiện.",
          "Lockpick được phép mang tối đa 3 cái; số lượng vượt quá bị tịch thu theo quy định.",
        ],
      },
      {
        id: "vu-khi",
        title: "Vũ khí không hợp lệ",
        paragraphs: [
          "Vũ khí không đăng ký seri, không có giấy phép, không chính chủ hoặc là vũ khí chuyên dụng của ban ngành được xử lý và tịch thu theo luật.",
          "Trong bất kỳ tình huống khám xét hợp lệ nào, đồ bẩn, tiền bẩn, vũ khí và dụng cụ vi phạm đều được đối chiếu theo luật tàng trữ.",
        ],
      },
    ],
    relatedSlugs: ["luat-vu-khi", "moc-tui", "dot-nhap-nha"],
    lastReviewed: "Nguồn Google Sites",
    source: source("Luật tàng trữ", "https://sites.google.com/view/upd-jetray/luật-vũ-khí/luật-tàng-trữ"),
  },
  {
    slug: "pit-va-truy-duoi",
    title: "P.I.T. và truy đuổi",
    category: "pursuit",
    categoryLabel: "Truy đuổi & giao tranh",
    summary: "Quy trình ba cấp còi, điều kiện P.I.T., truy vết và xử lý sự cố hai thế giới.",
    sections: [
      {
        id: "ba-cap-coi",
        title: "Ba cấp còi P.I.T.",
        paragraphs: [
          "Cấp 1 là cảnh báo và chuẩn bị tiếp cận. Cấp 2 là tín hiệu xin phép hoặc triển khai điều kiện P.I.T. Cấp 3 được dùng ngay trước và trong thời điểm thực hiện P.I.T.",
          "Chỉ một đơn vị bám sau xe đối tượng thực hiện P.I.T.; các đơn vị còn lại duy trì đội hình và ưu tiên an toàn.",
        ],
      },
      {
        id: "truy-vet",
        title: "Truy vết và mất dấu",
        paragraphs: [
          "Khi mất dấu, cảnh sát có 10 phút để truy vết. Trong khoảng thời gian này, đối tượng không được thay trang phục hoặc thay phương tiện.",
          "Xe cảnh sát có thể tắt còi nhưng phải bật đèn trong quá trình truy vết; khi gặp lại đối tượng, việc can thiệp tuân theo thời gian và quy trình đã quy định.",
        ],
      },
      {
        id: "hai-the-gioi",
        title: "Hai thế giới và an toàn",
        paragraphs: [
          "Sự cố đồng bộ hoặc va chạm mạnh có thể được hai bên trao đổi thiện chí để xử lý tình huống. Camera hành trình được khuyến khích để đối chiếu khi có khiếu nại.",
          "Không cố tình lao xe xuống nước hoặc phá hủy xe để ngăn việc kiểm tra vật chứng.",
        ],
      },
    ],
    relatedSlugs: ["luat-sua-xe", "truy-duoi-xuong-nuoc", "moc-tui"],
    lastReviewed: "Nguồn Google Sites",
    source: source("Luật truy đuổi", "https://sites.google.com/view/upd-jetray/luật-truy-đuổi"),
  },
  {
    slug: "moc-tui",
    title: "Móc túi",
    category: "crime",
    categoryLabel: "Tình huống phạm pháp",
    summary: "Điều kiện tham gia, phương tiện, truy đuổi và xử lý cho tình huống móc túi.",
    sections: [
      {
        id: "nguoi-tham-gia",
        title: "Yêu cầu người tham gia",
        paragraphs: [
          "Người tham gia phải đeo mặt nạ. Tình huống cho phép 1–4 người, với một người thực hiện vụ cướp; giới hạn riêng áp dụng cho phương tiện hai bánh và bốn bánh.",
          "Không dùng thuyền, xe đạp, xe quá khổ, xe cốp, xe thuê hoặc xe tân thủ. Không được backup và chỉ dùng phương tiện ban đầu.",
        ],
      },
      {
        id: "canh-sat",
        title: "Yêu cầu với cảnh sát",
        paragraphs: [
          "Tối đa 3 phương tiện truy đuổi. Còi 1 áp dụng từ đầu đến hết phút thứ 2; còi 2 từ phút thứ 2 đến hết phút thứ 4; còi 3 từ phút thứ 4 trở đi.",
        ],
      },
      {
        id: "xu-ly",
        title: "Xử lý",
        paragraphs: [
          "Nguồn quy định mức phạt 5.000$ và 15 tháng lao động; đồng phạm giảm 50% hóa đơn. Hợp tác sau truy đuổi có thể được xem xét giảm nhẹ.",
          "Phi tang đồ bẩn hoặc tiền bẩn bị xử lý tăng nặng theo nguồn.",
        ],
      },
    ],
    relatedSlugs: ["pit-va-truy-duoi", "luat-tang-tru", "cay-dong-ho"],
    lastReviewed: "Nguồn Google Sites",
    source: source("Móc túi", "https://sites.google.com/view/upd-jetray/luật-truy-đuổi/móc-túi"),
  },
  {
    slug: "cay-dong-ho",
    title: "Cạy đồng hồ",
    category: "crime",
    categoryLabel: "Tình huống phạm pháp",
    summary: "Điều kiện tham gia, truy đuổi và xử lý đối với tình huống cạy đồng hồ.",
    sections: [
      {
        id: "dieu-kien",
        title: "Điều kiện tham gia",
        paragraphs: [
          "Người tham gia phải đeo mặt nạ, chỉ dùng ô tô bốn bánh hai hoặc bốn chỗ, với số lượng từ 1–4 người và một người thực hiện vụ cướp.",
          "Không được backup, không dùng phương tiện nằm ngoài danh sách cho phép và không thay đồ hoặc đổi xe trước khi hết 10 phút truy vết khi mất dấu.",
        ],
      },
      {
        id: "truy-duoi",
        title: "Truy đuổi và xử lý",
        paragraphs: [
          "Cảnh sát dùng tối đa 3 ô tô và áp dụng lộ trình ba cấp còi theo mốc thời gian của phó bản.",
          "Nguồn quy định mức phạt 5.000$ và 15 tháng lao động; các hành vi phi tang hay backup sai quy định có thể bị tăng nặng.",
        ],
      },
    ],
    relatedSlugs: ["moc-tui", "dot-nhap-nha", "pit-va-truy-duoi"],
    lastReviewed: "Nguồn Google Sites",
    source: source("Cạy đồng hồ", "https://sites.google.com/view/upd-jetray/luật-truy-đuổi/cạy-đồng-hồ"),
  },
  {
    slug: "dot-nhap-nha",
    title: "Đột nhập nhà",
    category: "crime",
    categoryLabel: "Tình huống phạm pháp",
    summary: "Quy định phương tiện, backup, truy đuổi và mức xử lý cho tình huống đột nhập nhà.",
    sections: [
      {
        id: "dieu-kien",
        title: "Điều kiện tham gia",
        paragraphs: [
          "Người tham gia phải đeo mặt nạ, dùng ô tô bốn bánh hai hoặc bốn chỗ, với số lượng 1–4 người và một người thực hiện vụ cướp.",
          "Phó bản này cho phép một phương tiện backup theo nguồn. Không sử dụng thuyền, xe máy, xe đạp, xe quá khổ, xe cốp, xe thuê hoặc xe tân thủ.",
        ],
      },
      {
        id: "xu-ly",
        title: "Truy đuổi và xử lý",
        paragraphs: [
          "Cảnh sát sử dụng tối đa 4 phương tiện và áp dụng ba cấp còi theo mốc thời gian quy định. Khi mất dấu, đối tượng chờ hết 10 phút mới được thay đổi trang phục hoặc xe.",
          "Nguồn quy định mức phạt 10.000$ và 30 tháng lao động; hành vi phi tang có thể bị xử lý tăng nặng.",
        ],
      },
    ],
    relatedSlugs: ["cay-dong-ho", "moc-tui", "luat-tang-tru"],
    lastReviewed: "Nguồn Google Sites",
    source: source("Đột nhập nhà", "https://sites.google.com/view/upd-jetray/luật-truy-đuổi/đột-nhập-nhà"),
  },
  {
    slug: "trom-day-dien",
    title: "Trộm dây điện / tuần tra khu vực bẩn",
    category: "crime",
    categoryLabel: "Tình huống phạm pháp",
    summary: "Quy định cho hoạt động trộm dây điện và cách SCPD tuần tra khu vực bẩn.",
    sections: [
      {
        id: "nguoi-tham-gia",
        title: "Yêu cầu người tham gia",
        paragraphs: [
          "Người tham gia phải đeo mặt nạ. Nguồn cho phép nhiều phương tiện và số lượng người không giới hạn, ngoại trừ phương tiện ban ngành, doanh nghiệp, phương tiện bay và các phương tiện không được phép.",
          "Phó bản cho phép backup, nhưng người tham gia vẫn không được thay đồ hoặc đổi xe trước khi hết thời gian truy vết khi mất dấu.",
        ],
      },
      {
        id: "tuan-tra",
        title: "Tuần tra và truy đuổi",
        paragraphs: [
          "Cảnh sát tổ chức tuần tra toàn thành phố, thông báo bằng đèn/còi khi vào khu vực. Đối tượng có thời gian rời khu vực trước khi chuyển sang giai đoạn P.I.T. theo nguồn.",
          "Không camp, đi vòng hoặc đứng gần khu vực bẩn quá 10 phút.",
        ],
      },
      {
        id: "xu-phat",
        title: "Xử lý",
        paragraphs: [
          "Nguồn quy định mức phạt 5.000$ và 30 tháng lao động. Hành vi phi tang, backup sai quy định hoặc vi phạm điều kiện tình huống có thể bị xử lý tăng nặng.",
        ],
      },
    ],
    relatedSlugs: ["pit-va-truy-duoi", "luat-tang-tru", "moc-tui"],
    lastReviewed: "Nguồn Google Sites",
    source: source("Tuần tra khu vực bẩn / Luật trộm dây điện", "https://sites.google.com/view/upd-jetray/luật-truy-đuổi/tuần-tra-khu-vực-bẩn"),
  },
  {
    slug: "giao-tranh-voi-canh-sat",
    title: "Giao tranh với cảnh sát",
    category: "pursuit",
    categoryLabel: "Truy đuổi & giao tranh",
    summary: "Điều kiện, giới hạn khu vực và cách xử lý trong giao tranh với SCPD.",
    sections: [
      {
        id: "dieu-kien",
        title: "Điều kiện mở tình huống",
        paragraphs: [
          "Số lượng người dân phải nhiều hơn số cảnh sát tối thiểu 4 người. Tình huống cần có câu chuyện RP hợp lý và tuân thủ các quy định liên quan.",
          "Không giao tranh tại nơi công cộng, khu vực doanh nghiệp, cửa hàng, cây xăng, khu vực ban ngành hoặc khu vực ngành nghề.",
        ],
      },
      {
        id: "quy-tac",
        title: "Quy tắc giao tranh",
        paragraphs: [
          "Không ngồi, leo hoặc dùng xe để tạo lợi thế trong giao tranh. Không toxic, lăng mạ hoặc xúc phạm người khác.",
          "Cảnh sát dùng baton hoặc tay không; không dùng súng điện và còng khi đối tượng chưa được xử lý theo tình huống.",
        ],
      },
      {
        id: "ngoai-le",
        title: "Ngoại lệ",
        paragraphs: [
          "Quy tắc giao tranh này không áp dụng cho các phó bản móc túi, cạy đồng hồ và đột nhập nhà. Các phó bản này sử dụng điều kiện riêng của từng trang luật.",
        ],
      },
    ],
    relatedSlugs: ["pit-va-truy-duoi", "moc-tui", "luat-vu-khi"],
    lastReviewed: "Nguồn Google Sites",
    source: source("Luật giao tranh với cảnh sát", "https://sites.google.com/view/upd-jetray/luật-giao-tranh-với-cảnh-sát"),
  },
  {
    slug: "truy-duoi-xuong-nuoc",
    title: "Truy đuổi xuống nước",
    category: "pursuit",
    categoryLabel: "Truy đuổi & giao tranh",
    summary: "Cách xử lý năm tình huống đối tượng xuống nước trong quá trình truy đuổi.",
    sections: [
      {
        id: "nguyen-tac",
        title: "Nguyên tắc chung",
        paragraphs: [
          "Áp dụng cho mọi thành viên tham gia tình huống, bao gồm đồng phạm. Cảnh sát có thể dùng đồ lặn, thuyền và trong một số trường hợp có thể điều phối AIR1.",
          "Khi truy đuổi dưới nước, cảnh sát có thể còng trực tiếp để áp chế thay vì dùng súng điện nhằm tránh rủi ro chết đuối.",
        ],
      },
      {
        id: "tinh-huong",
        title: "Các trường hợp xuống nước",
        paragraphs: [
          "Nguồn phân biệt: chạy chậm rồi dừng xe xuống nước; chạy nhanh lao thẳng xuống nước; cố ý bay hoặc va chạm để văng xuống nước; va chạm vật thể theo quán tính; và va chạm xe cảnh sát theo quán tính.",
          "Mức xử lý phụ thuộc tình huống cụ thể, có thể gồm tịch thu đồ bẩn và áp dụng thêm luật trộm cướp hoặc hình phạt riêng.",
        ],
      },
    ],
    relatedSlugs: ["pit-va-truy-duoi", "luat-tang-tru"],
    lastReviewed: "Nguồn Google Sites",
    source: source("Luật truy đuổi xuống nước", "https://sites.google.com/view/upd-jetray/luật-truy-đuổi-xuống-nước"),
  },
  {
    slug: "bat-coc-con-tin",
    title: "Cướp người / bắt cóc con tin",
    category: "crime",
    categoryLabel: "Tình huống phạm pháp",
    summary: "Điều kiện bắt cóc, trách nhiệm các bên và cách xử lý tình huống con tin.",
    sections: [
      {
        id: "ben-bat-coc",
        title: "Yêu cầu bên bắt cóc",
        paragraphs: [
          "Không bắt cóc trong safe zone, không sát hại nạn nhân khi không có lý do RP hợp lý, không bắt cóc nhân sự ban ngành đang on-duty và không kéo dài tình huống.",
          "Phải có người khống chế con tin bằng vũ khí; sau khi nhận tiền chuộc, cần thả nạn nhân trong thời gian quy định.",
        ],
      },
      {
        id: "cac-ben",
        title: "Trách nhiệm các bên",
        paragraphs: [
          "Người bị bắt cóc cần hợp tác theo diễn biến RP khi có nguy cơ đe dọa tính mạng. Bên chuộc con tin tuân thủ yêu cầu hợp lý và chỉ phát động tấn công khi có căn cứ tình huống phù hợp.",
        ],
      },
      {
        id: "can-ra-soat",
        title: "Mức tiền chuộc cần rà soát",
        paragraphs: [
          "Nguồn Google Sites đồng thời nêu giới hạn 10.000$ và 20.000$ cho mỗi con tin. Nội dung này được đánh dấu cần SCPD xác nhận trước khi công bố mức giới hạn cuối cùng.",
        ],
      },
    ],
    relatedSlugs: ["giao-tranh-voi-canh-sat", "luat-vu-khi"],
    lastReviewed: "Nguồn Google Sites — cần xác nhận mức tiền chuộc",
    source: {
      ...source("Luật cướp người / bắt cóc con tin", "https://sites.google.com/view/upd-jetray/luật-cướp-người-bắt-cóc-con-tin"),
      status: "pending-review",
    },
  },
];

export const lawBySlug = new Map(laws.map((law) => [law.slug, law]));
