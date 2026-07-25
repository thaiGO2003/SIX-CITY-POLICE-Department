import type { Law } from "@/content/types";

const sourceUrl = "https://docs.google.com/document/d/1m177swU1bpb5DH-IOQvIOsa-wrkD2-xdAgOICjTRTis/edit";

const source = (label: string, url = sourceUrl) => ({
  label,
  url,
  status: "canonical" as const,
});

export const laws: Law[] = [
  // ─── NGHIỆP VỤ & ROLEPLAY ────────────────────────────────────────────────
  {
    slug: "quyen-va-nghia-vu-canh-sat",
    title: "Quyền và nghĩa vụ cảnh sát",
    category: "duty",
    categoryLabel: "Nghiệp vụ & roleplay",
    summary: "Phạm vi quyền hạn của cảnh sát trong kiểm tra hành chính, duy trì trật tự và xử lý tình huống RP.",
    sections: [
      {
        id: "kiem-tra-hanh-chinh",
        title: "Kiểm tra hành chính",
        paragraphs: [
          "Cảnh sát có thể kiểm tra hành chính công dân khi có hành vi vi phạm luật giao thông, trong khu vực xảy ra trộm cướp, khi công dân đeo mặt nạ/khẩu trang, hoặc theo chuyên đề do văn phòng Cảnh sát trưởng đưa ra.",
          "Nội dung kiểm tra hành chính gồm: Căn cước, bằng lái, cốp trước và cốp sau phương tiện. Khi có chuyên đề kiểm tra, cảnh sát được phép kiểm tra người và cốp xe. Nếu công dân không hợp tác sẽ bị phạt tội không chấp hành người thi hành công vụ.",
        ],
      },
      {
        id: "xu-ly-tinh-huong",
        title: "Xử lý tình huống",
        paragraphs: [
          "Cảnh sát có quyền từ chối các yêu cầu can thiệp OC của nghi phạm khi đang truy bắt hoặc làm việc. Mọi bồi thường do lỗi OC và can thiệp phải được diễn ra sau khi đi tù.",
          "Khi bị còng tay (không trong trạng thái bị áp giải), tội phạm vẫn có khả năng chạy và tìm cách tẩu thoát nếu cảnh sát sơ hở. Sau 30 phút, tội phạm có thể tìm mọi cách tháo còng. Không được xô ngã người khác/cảnh sát khi đang bị còng, không sử dụng hành động phụ thuộc vào tay quá nhiều.",
        ],
      },
      {
        id: "giu-trat-tu",
        title: "Duy trì trật tự",
        paragraphs: [
          "Cảnh sát có quyền giải tán đám đông tại khu vực ban ngành, nơi xảy ra cướp, điều tra tội phạm hoặc nơi có báo cáo gây mất trật tự công cộng. Không tuân thủ sẽ bị phạt tội gây rối trật tự công cộng.",
          "Khi đang điều tra tại đồn hoặc hiện trường, cảnh sát có quyền yêu cầu giữ trật tự. Cảnh sát cũng có quyền yêu cầu tội phạm/người dân giữ im lặng để phổ biến. Không hợp tác sẽ bị phạt tội chống/cản trở người thi hành công vụ.",
        ],
      },
      {
        id: "phoi-hop-truy-duoi",
        title: "Phối hợp trong truy đuổi",
        paragraphs: [
          "Khi cảnh sát bật còi hoặc truy đuổi tội phạm đang sử dụng phương tiện, người dân phải nhường đường. Không hợp tác sẽ bị khép tội cản trở người thi hành công vụ hoặc tội đồng phạm.",
          "Khi tham gia bắt án, cảnh sát có quyền còng tay về đồn mà không cần nêu thêm lý do nếu đã có đủ bằng chứng. Cảnh sát không cần đưa thêm bằng chứng trong tình huống có 3 nhân chứng trở lên hoặc 2 cảnh sát có mặt tại hiện trường.",
        ],
      },
      {
        id: "xu-ly-phuong-tien",
        title: "Xử lý phương tiện",
        paragraphs: [
          "Khi xe bị khóa/không khóa hoặc không chính chủ được phát hiện trong quá trình tuần tra (xe biến dạng, mất cửa, mất nắp capo...), cảnh sát có quyền kiểm tra hành chính chủ sở hữu hoặc tra hỏi người xung quanh.",
          "Nếu không ai nhận xe, cảnh sát có quyền dùng súng điện bắn nổ bánh xe, sử dụng công cụ bẻ khóa để kiểm tra và giam xe. Nếu không thể giam xe hoặc xe không biến mất, nhờ nhân viên TTC đưa xe về. Nếu có người nhận xe chính chủ, bắt buộc xuất trình giấy tờ xe và chấp hành kiểm tra hành chính.",
          "Cảnh sát có quyền kiểm tra xe bị giam giữ tại đồn và thu giữ toàn bộ đồ bẩn trên xe. Các vật phẩm trong xe khi bị xóa sẽ không được hoàn trả.",
        ],
      },
      {
        id: "cac-quyen-khac",
        title: "Các quyền khác",
        paragraphs: [
          "Cảnh sát có quyền yêu cầu lục soát người; không chấp hành sẽ bị phạt tội chống đối người thi hành công vụ + thu đồ vi phạm + phạt luật tàng trữ.",
          "Trong quá trình tuần tra, nếu phát hiện công dân dùng phương tiện quấy rối/trêu đùa cảnh sát, cảnh sát có quyền triệt hạ ngay lập tức.",
          "Các tình huống đền bù danh dự/thiệt hại: nếu đôi bên không thống nhất được, cảnh sát sẽ quyết định giá. Người dân không đồng ý sẽ bị quy tội chống đối người thi hành công vụ.",
        ],
      },
    ],
    relatedSlugs: ["roleplay-cong-dan", "roleplay-si-quan", "luat-phuong-tien"],
    lastReviewed: "Nguồn Google Doc",
    source: source("Quyền và nghĩa vụ cảnh sát"),
  },
  {
    slug: "roleplay-cong-dan",
    title: "Luật roleplay cho công dân",
    category: "duty",
    categoryLabel: "Nghiệp vụ & roleplay",
    summary: "Quy tắc ứng xử, trách nhiệm và quyền của công dân trong các tình huống với lực lượng chức năng.",
    sections: [
      {
        id: "giay-to-va-phan-anh",
        title: "Giấy tờ và quyền phản ánh",
        paragraphs: [
          "Cảnh sát yêu cầu mọi công dân khi ra đường phải mang Căn cước và Bằng lái khi điều khiển phương tiện.",
          "Người chơi có quyền tố cáo, phản ánh về người nhà nước (Cảnh sát, Bác sĩ) nếu phát hiện hành vi sai trái, với bằng chứng cụ thể (giấy tờ, hình ảnh, video). Phải đến đồn Cảnh sát để đưa ra bằng chứng, làm việc trực tiếp với người có thẩm quyền xử lý khiếu nại (GD, PGD, QLCS...).",
        ],
      },
      {
        id: "tai-hien-truong",
        title: "Tại hiện trường",
        paragraphs: [
          "Cảnh sát có quyền giải tán đám đông khi phát hiện tập trung tại cơ sở chức năng (đồn Cảnh sát, Bệnh viện), khu vực công cộng. Không khiêu khích để diễn ra giao tranh; vi phạm sẽ bị phạt tội gây mất trật tự công cộng hoặc đánh nhau vùng xanh.",
          "Khi cảnh sát bật đèn, còi, phương tiện được xem là phương tiện ưu tiên. Tất cả công dân phải nhường đường và dừng lại cho phương tiện di chuyển (xe thực hiện nhiệm vụ — cứu người, truy đuổi tội phạm).",
          "Khi đội Cảnh sát đang thực hiện nhiệm vụ bắt hoặc điều tra, những người không phận sự phải trật tự, tránh gây ồn ào. Cảnh sát được quyền nhắc nhở; quá 2 lần sẽ bị còng tay và áp giải (phạt lỗi cản trở người nhà nước).",
          "Cảnh sát có quyền yêu cầu người dân/đối tượng giữ im lặng để phổ biến. Nhắc nhở quá 2 lần sẽ bị còng và phạt theo luật chống người thi hành công vụ.",
        ],
      },
      {
        id: "kiem-tra-hanh-chinh-dan",
        title: "Kiểm tra hành chính",
        paragraphs: [
          "Cảnh sát có quyền kiểm tra hành chính người dân khi có dấu hiệu tình nghi phạm tội: xuất hiện trong khu vực cấm, lưu thông với dấu hiệu vi phạm giao thông.",
          "Cảnh sát có quyền kiểm tra hành chính người và phương tiện của mọi cơ sở kinh doanh trong địa bàn thành phố kể từ khi có thông báo từ phía Cảnh sát. Các đơn vị kinh doanh phải dừng mọi hoạt động trong thời gian cảnh sát thực hiện nhiệm vụ.",
          "Mọi đơn vị khi muốn thực hiện nhiệm vụ với cơ quan chức năng khác đều phải xuất trình giấy tờ nghề nghiệp (VD: Thẻ ngành...). Cảnh sát không cần đưa ra bằng chứng khi đã có đủ 3 nhân chứng hoặc 2 Cảnh sát tại hiện trường.",
        ],
      },
      {
        id: "triệu-tap-va-ton-trong",
        title: "Triệu tập và tôn trọng",
        paragraphs: [
          "Khi bị triệu tập từ phía Cảnh sát, người dân bắt buộc phải qua đồn làm việc. Nếu không, TTC sẽ xử lý tùy mức độ nghiêm trọng: có thể bị trục xuất 3-7 ngày hoặc tử hình.",
          "Đặt sự tôn trọng lên hàng đầu. Cảnh sát có quyền từ chối tương tác nếu người dân có hành vi/thái độ thiếu tôn trọng.",
          "Bodycam của cảnh sát chỉ dùng khi xử lý khiếu nại hoặc kiện cáo giữa Người dân vs Cảnh sát, bởi bộ phận Quản lý Cảnh sát. Người dân không có quyền yêu cầu cảnh sát show Bodycam trong bất kỳ tình huống nào.",
          "Người thi hành công vụ có thể dùng biện pháp mạnh trấn áp trong phòng giam đối với đối tượng không chấp hành, bao gồm tịch thu phương tiện ghi hình của đối tượng.",
        ],
      },
      {
        id: "khi-bi-bat",
        title: "Khi bị bắt",
        paragraphs: [
          "Khi bị còng, không thể sử dụng tay để nói chuyện đàm hoặc điện thoại. Vi phạm sẽ phạm luật OOC là PG (phi thực tế). Bị phát hiện sẽ giải quyết IC phạt Tù liên bang 60 tháng (60 phút). Tái phạm lần 2 sẽ giải quyết OOC.",
          "Khi thế giới thật có việc bận, hãy nói với sĩ quan và giải quyết tình huống nhanh chóng. Trường hợp bị crash game, liên hệ sĩ quan trên MXH Discord. Sau khi kết nối lại, đến đồn cảnh sát trình diện và tiếp tục tình huống. Không tuân thủ sẽ bị xử lý OOC.",
        ],
      },
    ],
    relatedSlugs: ["quyen-va-nghia-vu-canh-sat", "roleplay-si-quan", "luat-phuong-tien"],
    lastReviewed: "Nguồn Google Doc",
    source: source("Đối với người dân"),
  },
  {
    slug: "roleplay-si-quan",
    title: "Quy tắc dành cho S.P.D",
    category: "duty",
    categoryLabel: "Nghiệp vụ & roleplay",
    summary: "Chuẩn mực tác phong, kỷ luật, điều kiện on-duty và quy trình xử lý của sĩ quan S.P.D.",
    sections: [
      {
        id: "tac-phong-liem-chinh",
        title: "Tác phong và tính liêm chính",
        paragraphs: [
          "Tuyệt đối đặt sự tôn trọng mọi người lên hàng đầu. Ăn nói chuẩn mực với tư cách là người đại diện và thi hành luật pháp của thành phố. Nghiêm cấm các hành vi tỏ thái độ xưng 'mày, tao', có lời lẽ toxic với dân. Vi phạm sẽ bị kỷ luật.",
          "Tác phong không chuẩn mực với dân: Phạt tiền + Hạ cấp bậc xuống Officer + Biên bản kỷ luật cảnh cáo. Tái phạm lần 2 sẽ tiến hành sa thải.",
          "Nghiêm cấm tuồn đồ ban ngành và các vật chứng mà cảnh sát thu giữ được của người dân cũng như tội phạm. Nếu phát hiện: SA THẢI.",
          "Cảnh sát không được lạm quyền, bao che, thiên vị cho tội phạm. Vi phạm: Phạt tiền + Hạ cấp bậc xuống Officer + Biên bản kỷ luật cảnh cáo. Tái phạm lần 2 sẽ sa thải.",
          "Cảnh sát không cần đưa ra bằng chứng (video, hình ảnh) khi đã có đủ 3 nhân chứng hoặc 2 Cảnh sát tại hiện trường.",
        ],
      },
      {
        id: "su-dung-phuong-tien",
        title: "Sử dụng phương tiện và trang bị",
        paragraphs: [
          "Không được sử dụng xe, trực thăng đặc chủng cho mục đích cá nhân. Sử dụng sai mục đích gây ảnh hưởng đến người dân hoặc ban ngành: Phạt tiền + Hạ cấp bậc xuống Officer + Biên bản kỷ luật. Tái phạm sẽ sa thải.",
          "Không được sử dụng trang bị, phương tiện, nghiệp vụ của ban ngành sai mục đích. Vi phạm: Phạt tiền + Hạ cấp bậc xuống Officer + Biên bản kỷ luật.",
          "Cảnh sát không được vứt xe ban ngành bừa bãi, phải đậu đúng nơi quy định. Vi phạm sẽ bị phạt tiền.",
          "Khi chuộc xe, bắt buộc phải kiểm tra cốp xe. Nếu phát hiện đồ bẩn, cảnh sát được quyền tịch thu.",
        ],
      },
      {
        id: "on-duty",
        title: "Điều kiện làm nhiệm vụ",
        paragraphs: [
          "Khi OFF-DUTY không được mặc đồng phục Cảnh sát. ON-DUTY treo lương, xuất hồn (AFK) hoặc không di chuyển quá 5 phút (chưa có báo cáo lý do với Cấp trên): Phạt tiền + Hạ cấp bậc xuống Officer + Biên bản kỷ luật.",
          "Phải mặc đồng phục Cảnh sát khi tham gia nhiệm vụ. Khi đi tuần hoặc đuổi cướp bắt buộc phải dùng phương tiện của cảnh sát được cấp bởi Ban Giám đốc Cảnh sát.",
          "Tất cả cảnh sát khi làm nhiệm vụ đều phải có hình ảnh và body cam để tránh bị khiếu nại. Phải luôn ở trong đàm của cảnh sát khi on-duty, mic phải ổn định.",
          "Đảm bảo tình trạng mạng ổn định, tránh tình trạng hai thế giới, giật lag làm ảnh hưởng đến nhiệm vụ.",
        ],
      },
      {
        id: "chèn-xe",
        title: "Chèn xe",
        paragraphs: [
          "Cảnh sát chèn xe sai luật, đâm trực diện đầu/đuôi/2 bên hông xe: Lần 1 nhắc nhở + Biên bản kỷ luật, tiến hành bổ túc nghiệp vụ và kiểm tra. Nếu tái phạm: SA THẢI.",
        ],
      },
      {
        id: "quy-trình-xử-an",
        title: "Quy trình xử án",
        paragraphs: [
          "Quy trình chuẩn: (1) Yêu cầu tội phạm gỡ mặt nạ; (2) Chào tội phạm, giới thiệu và xuất trình thẻ ngành; (3) Yêu cầu xuất trình CCID và Bằng lái xe (nếu điều khiển phương tiện); (4) Lục soát/Kiểm tra đối tượng; (5) Thông báo tội danh và mức phạt; (6) Tiến hành xử phạt.",
          "Khi kiểm tra hành chính luôn phải có thái độ vui vẻ hòa nhã với người dân.",
        ],
      },
      {
        id: "quy-tắc-vung-do",
        title: "Quy tắc vùng đỏ và khu vực cấm",
        paragraphs: [
          "Những khu vực chế tạo đồ bẩn, khu vực nguy hiểm (vùng đỏ): Cảnh sát bắt buộc phải bật còi và đèn báo hiệu trước 100m khi vào. Trường hợp đối tượng tình nghi bỏ chạy, cảnh sát có quyền truy bắt hoặc rà soát quanh khu vực.",
          "Cảnh sát chỉ được kiểm tra các khu vực cấm 10 phút/1 lần. Nghiêm cấm hành vi Cảnh sát camp tại khu vực cấm.",
        ],
      },
      {
        id: "cấm-tham-gia-hoat-dong-khac",
        title: "Nghiêm cấm tham gia hoạt động khác",
        paragraphs: [
          "Cảnh sát tuyệt đối không được phép tham gia hoạt động trong gia tộc, gangs, clan... Nếu phát hiện trực tiếp hoặc có bằng chứng: Phạt tiền + Sa thải vĩnh viễn khỏi ngành + Lưu trữ trong hồ sơ danh sách đen của Sở.",
          "Cảnh sát tuyệt đối không được phép làm tất cả các nghề bẩn kể cả khi không trong ca trực (chưa có sự cho phép của cấp trên hoặc giờ cao điểm). Off-duty làm nghề bẩn: Phạt x3 lỗi vi phạm + x3 tháng lao động. Cố tình lạm dụng, bỏ bê công việc, không có cống hiến: Sa thải.",
          "Không gây war, dùng từ ngữ không chuẩn mực trên Mạng xã hội (Toác tơ IG, Ứng dụng đỉnh cao OC). Vi phạm: Phạt tiền + Hạ cấp bậc xuống Officer + Biên bản kỷ luật.",
        ],
      },
      {
        id: "vu-khi-si-quan",
        title: "Vũ khí và đồ chuyên dụng",
        paragraphs: [
          "Súng điện: Sử dụng trong các tình huống người dân không chấp hành hiệu lệnh của Cảnh sát.",
          "Còng tay: Sử dụng khi tội phạm đã bị gục ngã bằng cách bắn súng điện, gạt giò... Tránh spam còng tay.",
          "Baton: Sử dụng trong tình huống đối tượng có dấu hiệu chống trả cảnh sát hoặc gây rối nơi công cộng.",
          "Gun: Sử dụng khi đối tượng shot fire chống trả, hoặc gây tổn thương tới mọi người xung quanh, tính mạng của PD bằng heavy weapon (gun).",
        ],
      },
    ],
    relatedSlugs: ["quyen-va-nghia-vu-canh-sat", "pit-va-truy-duoi", "luat-hinh-su"],
    lastReviewed: "Nguồn Google Doc",
    source: source("Đối với S.P.D"),
  },

  // ─── GIAO THÔNG & PHƯƠNG TIỆN ───────────────────────────────────────────
  {
    slug: "luat-phuong-tien",
    title: "Luật phương tiện",
    category: "traffic",
    categoryLabel: "Giao thông & phương tiện",
    summary: "Quy định về giấy tờ, tốc độ, đỗ xe, xe ưu tiên và các hành vi vi phạm giao thông.",
    sections: [
      {
        id: "giay-to-so-huu",
        title: "Giấy tờ và quyền sở hữu",
        paragraphs: [
          "Chuộc xe: mức phí theo quy định cho mỗi phương tiện.",
          "Không mang giấy tờ tùy thân khi bị kiểm tra hành chính hoặc không mang giấy phép lái xe khi tham gia giao thông sẽ bị xử phạt. Mức phạt áp dụng cho mỗi loại giấy tờ không mang theo.",
          "Nghiêm cấm sử dụng xe không chính chủ (xe NPC hoặc xe mang tên người khác). Sử dụng xe không chính chủ để thực hiện hành vi cướp: mức xử phạt cộng dồn. Hình thức: Phạt tiền, giam giữ phương tiện, tịch thu toàn bộ đồ bẩn trong người và trên xe.",
        ],
      },
      {
        id: "toc-do",
        title: "Quy định tốc độ",
        paragraphs: [
          "Trong thành phố: Tối đa 70 km/h. Ngoài thành phố: Tối đa 140 km/h. Trên cao tốc: Tối đa 170 km/h. Áp dụng theo chuyên đề khi có thông báo.",
          "Điều khiển phương tiện vượt quá tốc độ quy định sẽ bị xử phạt.",
        ],
      },
      {
        id: "do-xe",
        title: "Đỗ xe sai quy định",
        paragraphs: [
          "Xe 4 bánh: Đậu đúng vạch của Thành phố; đậu đúng chiều bên lề phải theo hướng lưu thông của NPC; một bánh trước và một bánh sau nằm trên lề hoặc đậu gọn hoàn toàn vào lề.",
          "Xe 2 bánh: Đậu sát lề đường theo đúng chiều lưu thông của NPC; xe phải được dựng gọn vào lề.",
          "Vi phạm: Phạt tiền và giam giữ phương tiện mỗi lần vi phạm.",
        ],
      },
      {
        id: "luu-thong",
        title: "Lưu thông an toàn",
        paragraphs: [
          "Vượt đèn đỏ, đi ngược chiều: Áp dụng theo chuyên đề khi có thông báo. Mức phạt theo quy định.",
          "Không chấp hành hiệu lệnh dừng xe của lực lượng cảnh sát (bao gồm tín hiệu đèn và còi ưu tiên) sẽ bị xử phạt.",
          "Đua xe trái phép: Nghiêm cấm tổ chức hoặc tham gia dưới mọi hình thức. Hình thức: Phạt tiền + Giam giữ phương tiện.",
          "Điều khiển phương tiện không đủ tiêu chuẩn (thiếu gương, thiếu nắp capo, gãy cửa, thiếu phụ kiện bắt buộc): Cảnh sát có quyền kiểm tra hành chính và tịch thu đồ bẩn. Hình thức: Giam giữ phương tiện + Hóa đơn phạt.",
        ],
      },
      {
        id: "hanh-vi-cam",
        title: "Hành vi bị cấm",
        paragraphs: [
          "Lạng lách, đánh võng, bốc đầu: Nghiêm cấm. Mức phạt theo quy định.",
          "Chở quá số người quy định: Bị xử phạt.",
          "Gây tai nạn rồi bỏ chạy: Phạt tiền + Bồi thường toàn bộ thiệt hại cho người bị hại.",
          "Gây tai nạn nghiêm trọng (ảnh hưởng tính mạng): Phạt tiền + Bồi thường toàn bộ thiệt hại.",
          "Không nhường đường cho xe ưu tiên hoặc hỗ trợ tội phạm: Bị xử phạt.",
        ],
      },
      {
        id: "phuong-tien-cam",
        title: "Phương tiện bị cấm và sử dụng sai mục đích",
        paragraphs: [
          "Nghiêm cấm điều khiển: Xe nhà nước, xe quân đội, máy bay, trực thăng, xe quá khổ và các phương tiện tương tự (khi không có tình huống RP hợp lệ).",
          "Người dân tự ý sử dụng phương tiện của ban ngành khi chưa được cho phép: Phạt tiền + Tù 60 tháng (phút).",
          "Sử dụng phương tiện doanh nghiệp sai mục đích (làm nghề sạch khác, thực hiện công việc bẩn, tham gia cướp...): Phạt tiền + Báo cáo cho chủ Doanh nghiệp + Thu phương tiện lập tức.",
          "Cản trở cảnh sát khi truy đuổi: Cảnh sát có quyền ép xe, triệt hạ và áp chế tại chỗ. Hình thức: Phạt tiền + Giam phương tiện.",
        ],
      },
    ],
    relatedSlugs: ["luat-sua-xe", "pit-va-truy-duoi", "roleplay-cong-dan"],
    lastReviewed: "Nguồn Google Doc",
    source: source("Luật phương tiện"),
  },
  {
    slug: "luat-sua-xe",
    title: "Luật sửa xe",
    category: "traffic",
    categoryLabel: "Giao thông & phương tiện",
    summary: "Giới hạn sửa, đổi và cất phương tiện trong truy đuổi hoặc thời gian truy vết.",
    sections: [
      {
        id: "nguoi-dan-toi-pham",
        title: "Người dân và tội phạm",
        paragraphs: [
          "Trong quá trình truy đuổi hay còn thời gian truy dấu: NGHIÊM CẤM sử dụng lệnh hoặc bộ kit sửa xe.",
          "Nếu có nhân viên Mechanic trong ca trực, người dân được phép sửa xe ở Gara. Cảnh sát có quyền còi 3 và tiến hành chèn/ép/pit xe nếu phát hiện.",
          "Sau khi sửa xe: NGHIÊM CẤM đổi xe, cất xe, độ xe.",
          "Nếu vi phạm điều luật trên, Cảnh sát có quyền còi 3 và tiến hành chèn/ép/pit xe.",
        ],
      },
      {
        id: "canh-sat",
        title: "Cảnh sát",
        paragraphs: [
          "Trong quá trình truy đuổi, Cảnh sát hạn chế việc sửa xe khi vẫn còn tiếp tục truy đuổi được. Nếu tội phạm vi phạm Luật Sửa Xe, Cảnh sát có quyền kết thúc tình huống, xử phạt theo đúng sự việc.",
          "Ngoài quá trình truy đuổi, Cảnh sát được phép sửa xe.",
        ],
      },
    ],
    relatedSlugs: ["luat-phuong-tien", "pit-va-truy-duoi"],
    lastReviewed: "Nguồn Google Doc",
    source: source("Luật sửa xe"),
  },

  // ─── AN NINH & VŨ KHÍ ────────────────────────────────────────────────────
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
          "Vũ khí được hiểu là những vật phẩm gây sát thương cho người khác.",
          "Khi người dân có vũ khí, phải khai báo để xác nhận chính chủ.",
          "Khi không trong tình huống, cảnh sát kiểm tra hành chính, lục soát người và phương tiện phát hiện tàng trữ vũ khí sẽ xử lý theo LUẬT TÀNG TRỮ.",
          "Cảnh sát tiến hành kiểm tra lý lịch vũ khí, kiểm tra giấy phép sử dụng vũ khí, xác nhận chính chủ. Nếu không đáp ứng đủ, xử lý theo Luật Tàng trữ.",
        ],
      },
      {
        id: "su-dung",
        title: "Sử dụng vũ khí",
        paragraphs: [
          "Cầm vũ khí khi không trong tình huống sẽ bị phạt tiền.",
          "Sử dụng vũ khí gây sát thương lên người trong khu vực thành phố (ngoài vùng đỏ), ban ngành, làm nghề sạch, tiệm quần áo, tiệm tóc... Vi phạm: Phạt tiền + 60 tháng lao động.",
          "Các trường hợp sử dụng vũ khí đều phải được xây dựng dựa theo tình huống ingame. Nếu không sẽ bị tính là vi phạm luật Non-RP: Phạt tiền + 100 tháng lao động + Tịch thu Vũ khí (không cho phép chuộc).",
        ],
      },
    ],
    relatedSlugs: ["luat-tang-tru", "giao-tranh-voi-canh-sat"],
    lastReviewed: "Nguồn Google Doc",
    source: source("Luật vũ khí"),
  },
  {
    slug: "luat-tang-tru",
    title: "Luật tàng trữ",
    category: "security",
    categoryLabel: "An ninh & vũ khí",
    summary: "Quy định tịch thu vật phẩm, tiền bẩn, công cụ và vũ khí khi kiểm tra hợp lệ.",
    sections: [
      {
        id: "dong-bẩn",
        title: "Đồ bẩn và dụng cụ",
        paragraphs: [
          "Dụng cụ làm bẩn, tiền bẩn, vật phẩm liên quan đến làm bẩn: Sở tiến hành BẮT BUỘC TỊCH THU khi có quyền kiểm tra hành chính và phương tiện.",
          "Lockpick được mang theo tối đa 3 cái; trên 3 sẽ bị tịch thu.",
          "Dụng cụ làm bẩn tàng trữ trong người, cốp xe sẽ bị BẮT BUỘC TỊCH THU và KHÔNG phạt tiền.",
          "Các đồ bẩn, tiền bẩn tàng trữ trong người hoặc trên phương tiện sẽ bị BẮT BUỘC TỊCH THU và KHÔNG phạt tiền.",
        ],
      },
      {
        id: "vu-khi-tang-tru",
        title: "Vũ khí tàng trữ",
        paragraphs: [
          "Vũ khí tàng trữ trong người không đăng ký seri, không có giấy phép đăng ký sử dụng, không chính chủ: Sở BẮT BUỘC TỊCH THU.",
          "Vũ khí tàng trữ là vũ khí chuyên dụng của ban ngành (Heavy Weapon): BẮT BUỘC TỊCH THU + Phạt tù 60 phút.",
        ],
      },
      {
        id: "pho-ban",
        title: "Tình huống phó bản",
        paragraphs: [
          "Các tình huống phó bản khi hủy, cảnh sát yêu cầu kiểm tra người. Phát hiện đồ bẩn, tiền bẩn không liên quan đến phó bản đó vẫn bị TỊCH THU.",
          "Trong tình huống cướp của phó bản A mà trong người tội phạm có đồ bẩn của phó bản B vẫn bị TỊCH THU và KHÔNG phạt tiền.",
          "Lưu ý: Trong bất kỳ tình huống nào được phép khám xét người, nếu phát hiện đồ bẩn, tiền bẩn, vũ khí, dụng cụ làm bẩn, lockpick sẽ tính theo luật tàng trữ.",
        ],
      },
    ],
    relatedSlugs: ["luat-vu-khi", "luat-hinh-su"],
    lastReviewed: "Nguồn Google Doc",
    source: source("Luật tàng trữ"),
  },

  // ─── TRUY ĐUỔI & GIAO TRANH ──────────────────────────────────────────────
  {
    slug: "pit-va-truy-duoi",
    title: "P.I.T và truy đuổi",
    category: "pursuit",
    categoryLabel: "Truy đuổi & giao tranh",
    summary: "Quy trình ba cấp còi P.I.T, điều kiện, truy vết và xử lý sự cố hai thế giới.",
    sections: [
      {
        id: "ba-cap-coi",
        title: "Quy định 3 cấp còi P.I.T",
        paragraphs: [
          "Cấp 1 (Chuẩn bị P.I.T): Xe PD bật còi cấp 1 để thông báo cho toàn bộ đơn vị truy đuổi và nghi phạm rằng P.I.T sắp được thực hiện. Khoảng cách phải đảm bảo an toàn. Ý nghĩa: Cảnh báo — Chuẩn bị tiếp cận.",
          "Cấp 2 (Xin phép thực hiện P.I.T): Xe dẫn đầu hoặc chỉ huy truy đuổi phát lệnh 'Xin phép P.I.T'. Chặn đường, đón đầu đường tẩu thoát. Xe PD chuyển sang còi cấp 2 trước khi đánh lái P.I.T. Ý nghĩa: Đã được phép thực hiện P.I.T.",
          "Cấp 3 (Đang thực hiện P.I.T): Xe PD bật còi cấp 3 ngay trước và trong thời điểm thực hiện P.I.T. Chỉ duy nhất 1 đơn vị bám sau xe đối tượng mới được phép P.I.T. Các đơn vị phía sau không được vượt. Đơn vị đầu fail P.I.T, các phương tiện sau mới được phép củng cố đội hình. Sau khi xe nghi phạm mất kiểm soát, các đơn vị áp sát, khóa đầu/đuôi và tiến hành áp chế nếu an toàn.",
        ],
      },
      {
        id: "luu-y-pit",
        title: "Lưu ý khi thực hiện P.I.T",
        paragraphs: [
          "Chỉ thực hiện từng đơn vị P.I.T lên đối tượng. Không tự ý thực hiện P.I.T khi chưa phát tín hiệu đúng cấp còi. Không nhiều xe cùng lúc thực hiện P.I.T lên một phương tiện.",
          "P.I.T chỉ được thực hiện khi đảm bảo an toàn cho người dân và phù hợp với tình huống RP. Cho phép PIT khi đáp ứng điều kiện cụ thể (có phê duyệt của chỉ huy hoặc giới hạn tốc độ).",
          "Khi tội phạm xuống xe cố tình trốn chạy bằng bộ: Sau 3 lần yêu cầu hợp tác đứng lại (bằng miệng), Cảnh sát mới được phép dùng súng điện và còng. Nếu chạy về hướng có biển/sông: bắn súng điện không cần chờ. Khi bơi hoặc lặn: áp sát còng không cần bắn súng điện.",
          "Nếu xe đối tượng cố tình dừng lại để thả đồng phạm: còi 3 chèn ép. Khi xe hỏng nặng: lock phương tiện. Nếu đối tượng cố thủ trên xe không đầu hàng: bắn súng điện rồi còng.",
          "Khi thấy đèn và nghe còi hiệu lệnh xe cảnh sát, người dân vui lòng nhường đường. Nếu cố tình chạy theo sẽ tính là 'Cản trở' và cảnh sát có quyền TRIỆT HẠ.",
        ],
      },
      {
        id: "truy-vet",
        title: "Quy định về truy vết",
        paragraphs: [
          "Tội phạm trốn thoát, mất dấu: Cảnh sát sẽ có 10 phút để truy vết. Xe cảnh sát được phép tắt còi nhưng bắt buộc phải bật đèn.",
          "Nếu trốn thoát thành công, sau 10 phút mới có thể thay đổi trang phục, phương tiện.",
          "Khi chưa hết tình huống truy vết 10 phút, nếu gặp lại đối tượng, Cảnh sát được quyền bật còi 3 chèn ép xe.",
          "Trong 10 phút cảnh sát truy vết, nếu phát hiện người dân có đặc điểm tương đồng (trang phục, mặt nạ, phương tiện, hình xăm), sẽ tiến hành kiểm tra. Nếu phát hiện đồ bẩn, tiền bẩn: tịch thu và mời về đồn làm việc.",
        ],
      },
      {
        id: "hai-the-gioi",
        title: "Quy định về Hai Thế Giới",
        paragraphs: [
          "Tình huống truy đuổi bị 2 thế giới, va chạm mạnh giữa 2 bên là điều không mong muốn. Hai bên có quyền đàm phán trên tinh thần vui vẻ và hủy tình huống.",
          "Cảnh sát và người dân nên trang bị Camera hành trình để đối chiếu sự việc khi có kiện cáo đâm xe với lý do 'Hai thế giới'.",
          "Trong tình huống chưa đến còi 3 mà xe tội phạm bị hư hỏng do va chạm với xe Cư dân: có thể hủy tình huống. Nếu va chạm với NPC: không được phép hủy.",
          "Truy đuổi tốc độ cao, xe tội phạm giảm tốc đột ngột hoặc va chạm ở các góc bay/đường bay: không tính là cố tình đâm xe, không cho phép hủy tình huống.",
          "Cấm lao xe xuống nước hoặc làm nổ xe để ngăn kiểm tra cốp xe (lạm dụng cơ chế game). Nếu xảy ra ngoài ý muốn: giơ tay đầu hàng để giảm nhẹ tình tiết. Nếu bỏ chạy: tính là cố tình vi phạm, quy vào tội phi tang vật chứng (x2 hình phạt).",
          "KHÔNG ÁP DỤNG TRIỆT HẠ ĐỐI VỚI CÁC TÌNH HUỐNG PHÓ BẢN. Nếu đối tượng sai luật, cảnh sát sẽ áp dụng luật triệt hạ.",
        ],
      },
    ],
    relatedSlugs: ["luat-sua-xe", "giao-tranh-voi-canh-sat", "roleplay-si-quan"],
    lastReviewed: "Nguồn Google Doc",
    source: source("Luật P.I.T & truy đuổi"),
  },
  {
    slug: "giao-tranh-voi-canh-sat",
    title: "Giao tranh với cảnh sát",
    category: "pursuit",
    categoryLabel: "Truy đuổi & giao tranh",
    summary: "Điều kiện, giới hạn khu vực, quy tắc giao tranh và các quy định CRIM/GANG VS PD.",
    sections: [
      {
        id: "cop-baiting",
        title: "Cop Baiting (Khiêu khích cảnh sát)",
        paragraphs: [
          "Là hành vi cố ý thu hút sự chú ý của lực lượng thực thi pháp luật mà không có mục tiêu hoặc động cơ nhập vai hợp lý, gây rối, tạo ra vấn đề không cần thiết hoặc ép buộc cảnh sát tham gia vào các cuộc truy đuổi/đối đầu không có RP giá trị.",
          "Quay trở lại tình huống sau khi đã trốn thoát thành công, cố tình khiêu khích hoặc kéo dài cuộc truy đuổi với mục tiêu biến cuộc trò chuyện thành đấu súng cũng được xem là Cop Baiting.",
          "Mọi hành động liên quan đến cảnh sát cần phải có lý do và diễn biến phù hợp với bối cảnh nhập vai. Cố gắng tạo ra vấn đề chỉ để gây bạo loạn, câu chú ý hoặc tìm kiếm giao tranh đều bị cấm.",
        ],
      },
      {
        id: "dau-sung",
        title: "Đấu súng giao tranh",
        paragraphs: [
          "Nghiêm cấm lợi dụng lỗi game, lỗi hệ thống hoặc các khu vực bug để tạo lợi thế trong giao tranh. Bao gồm: sử dụng nhiều lần cùng một mảnh giáp, khai thác lỗi đạn vô hạn, lỗi va chạm, lỗi địa hình.",
          "Trong thời gian đấu súng hoặc truy đuổi, cảnh sát không được phép sửa chữa xe hoặc trực thăng tại các điểm sửa cố định trên bản đồ. Chỉ được dùng bộ sửa cầm tay. Sửa chữa hoàn toàn chỉ được thực hiện tại trụ sở (PD) hoặc gara sau khi tình huống kết thúc.",
          "Tội phạm cũng không được sửa xe/trực thăng tại điểm sửa cố định trong thời gian tham gia đấu súng, truy đuổi hoặc lẩn trốn. Chỉ được dùng bộ sửa cầm tay.",
          "Nghiêm cấm tấn công trực tiếp vào trụ sở cảnh sát (PD), bệnh viện hoặc địa điểm công cộng trọng yếu, địa điểm làm nghề sạch nếu không có nguyên nhân và diễn biến nhập vai hợp lý.",
        ],
      },
      {
        id: "hoat-dong-hang-ngay",
        title: "Hoạt động tội phạm hàng ngày",
        paragraphs: [
          "Nghiêm cấm tạo tình huống vô lý nhằm cản trở, quấy rối hoặc ngăn chặn hoạt động của PD, đặc biệt liên quan đến vận chuyển phạm nhân, xử lý hiện trường.",
          "Sau khi giao tranh kết thúc, các bên phải chủ động rời hiện trường khi an toàn, tránh ở lại không cần thiết để tiếp tục khiêu khích.",
          "Nghiêm cấm cướp bóc liên tục, có hệ thống hoặc nhắm vào người chơi lặp đi lặp lại chỉ để trục lợi. Cướp phải được xem như tình huống nhập vai, không phải phương thức farm tiền.",
          "Cấm các hình thức cướp thiếu chất lượng: 'Ê, cướp đây!', 'Giơ tay lên!'... Nếu bị phát hiện thường xuyên thực hiện cướp vô lý, người chơi có thể bị cảnh cáo, khóa tài khoản tạm thời hoặc cấm tham gia server.",
        ],
      },
      {
        id: "trom-cuop-tiep-te",
        title: "Trộm cướp — Tiếp tế",
        paragraphs: [
          "Khi một nhóm đã bắt đầu vụ cướp và cảnh sát đã có mặt tại hiện trường, mọi hành vi tiếp tế thêm tài nguyên, vũ khí, đạn dược, giáp hoặc phương tiện hỗ trợ đều bị nghiêm cấm.",
          "Trong quá trình giao tranh, không được rời tình huống để quay về kho, căn cứ lấy thêm tài nguyên rồi quay lại tiếp tục tham chiến.",
          "Dụng cụ cần thiết bị hỏng/thất lạc/hết trong quá trình cướp: phải chấp nhận hậu quả. Không được rời tình huống để lấy thêm dụng cụ mới.",
          "Tất cả thành viên tham gia phải chuẩn bị đầy đủ nhân lực, phương tiện, trang bị và vật tư ngay từ đầu. Thiếu sót trong chuẩn bị là một phần của tình huống nhập vai.",
        ],
      },
      {
        id: "trom-cuop-can-thiep",
        title: "Trộm cướp — Can thiệp",
        paragraphs: [
          "Các gang/nhóm tội phạm không được can thiệp vào vụ cướp/truy đuổi/giao tranh đang diễn ra nếu không có liên quan trực tiếp đến tình huống ban đầu.",
          "Các bên có mâu thuẫn từ trước không được lợi dụng thời điểm đối phương đang trong tình huống để mở giao tranh mới. Phải chờ tình huống hiện tại kết thúc hoàn toàn.",
        ],
      },
      {
        id: "pd-gang-quy-uoc",
        title: "Quy ước giao tranh PD và Gang",
        paragraphs: [
          "PD có thể can thiệp khi: đối tượng có dấu hiệu vác xác, cứu người, bắt cóc hoặc sửa chữa phương tiện trong/sau giao tranh; có dấu hiệu loot đồ sau khi tiếng súng kết thúc một khoảng thời gian nhất định; đối tượng di chuyển quá xa khu vực giao tranh ban đầu.",
          "Lưu ý: Đây là luật ngầm và nghiệp vụ được đào tạo trong role PD để người chơi mới nắm bắt. PD chỉ nhìn tình huống từ góc nhìn hạn chế, cần chờ giao tranh kết thúc để cứu người, bảo vệ hiện trường, xử lý tang vật.",
        ],
      },
    ],
    relatedSlugs: ["pit-va-truy-duoi", "luat-vu-khi", "luat-hinh-su"],
    lastReviewed: "Nguồn Google Doc",
    source: source("CRIM/GANG VS PD"),
  },

  // ─── HÌNH SỰ & CỘNG ĐỒNG ────────────────────────────────────────────────
  {
    slug: "luat-hinh-su",
    title: "Luật hình sự",
    category: "crime",
    categoryLabel: "Hình sự & cộng đồng",
    summary: "Bộ luật hình sự Six City: gây rối trật tự công cộng và khu vực cơ quan ban ngành.",
    sections: [
      {
        id: "noi-cong-cong",
        title: "Đối với khu vực công cộng",
        paragraphs: [
          "'Nơi công cộng' bao gồm: Quảng trường, Bệnh viện, Garage chính, Cửa hàng tiện lợi, Bến xe, hoặc bất kỳ khu vực nào có đông người dân qua lại.",
        ],
        bullets: [
          "Sử dụng Emoji/Animation phản cảm: Lần 1 — Cảnh cáo văn bản + Phạt tiền; Lần 2 — Phạt tiền; Lần 3 — Phạt tiền + Phạt cải tạo 10 tháng tù giam.",
          "Đánh nhau, gây gổ (Ẩu đả): Chưa gây hậu quả nghiêm trọng — Phạt tiền + 15 tháng tù giam. Gây thương tích nặng (phải gọi EMS) — Phạt tiền + 30 tháng tù (Tội cố ý gây thương tích) + Đền bù cho nạn nhân.",
        ],
      },
      {
        id: "co-quan-ban-nganh",
        title: "Đối với khu vực cơ quan ban ngành",
        paragraphs: [
          "'Cơ quan ban ngành' bao gồm: Trụ sở LSPD (Sở cảnh sát), EMS (Bệnh viện), Ủy ban thành phố, Tòa án... Khu vực này được bảo vệ nghiêm ngặt, hình phạt nặng gấp đôi so với nơi công cộng.",
        ],
        bullets: [
          "Khiêu khích, xúc phạm nhân viên Ban ngành (LSPD, EMS): Lần 1 — Phạt tiền + 20 tháng tù giam. Tái phạm hoặc xúc phạm nặng — Phạt tiền + 40 tháng tù giam.",
          "Sử dụng Emoji/Animation phản cảm tại Cơ quan: Phạt tiền + 15 tháng tù giam (không cảnh cáo).",
          "Gây gổ, bạo loạn tại Cơ quan ban ngành: Phạt tiền + 50 tháng tù giam. Có thể bị tịch thu vũ khí/giấy phép sử dụng vũ khí.",
        ],
      },
    ],
    relatedSlugs: ["roleplay-cong-dan", "giao-tranh-voi-canh-sat"],
    lastReviewed: "Nguồn Google Doc",
    source: source("Bộ luật hình sự Six City"),
  },
  {
    slug: "thuat-ngu-nhap-vai",
    title: "Thuật ngữ nhập vai",
    category: "crime",
    categoryLabel: "Hình sự & cộng đồng",
    summary: "Bảng thuật ngữ IC — OOC: cách diễn đạt trong game và ý nghĩa thực tế.",
    sections: [
      {
        id: "ic-ooc",
        title: "Thuật ngữ IC và ý nghĩa OOC",
        paragraphs: [
          "Dưới đây là các thuật ngữ thường dùng khi nhập vai. Bạn có thể sử dụng từ ngữ khác phù hợp hơn tùy theo tình huống.",
        ],
        bullets: [
          "'Đầu tôi nổ rồi' = Game bị crash hoặc disconnect",
          "'Tôi đang thiền / đang giải quyết cá nhân' = Đang AFK",
          "'Giãn cơ F / G / E...' = Nhấn phím tắt",
          "'Mắt tôi bị hoa rồi' = Lỗi hiển thị, không thấy người khác hoặc vật thể",
          "'Chân anh có con gì kìa / Nhảy lên' = Bị lỗi, người khác thấy bạn đứng một chỗ",
          "'Đi chợp mắt một tí' = Thoát game và vào lại",
          "'Đi ngủ đây' = Thoát game hoàn toàn",
          "'Đang trên xe buýt' = Đang ở hàng chờ vào server",
          "'Bị giam mấy tháng' = Bị tù vài phút ngoài đời",
          "'Đau đầu quá' = Bị lag, máy yếu hoặc mạng chậm",
          "'Dân địa phương' = NPC trong game",
          "'Chuẩn bị có sóng thần' = Server sắp reset",
          "'Nhìn qua mắt mình đi' = Chuyển sang góc nhìn thứ nhất",
          "'Đau họng' = Mic bị rè, mất tiếng, nhỏ",
        ],
      },
    ],
    relatedSlugs: ["roleplay-cong-dan", "roleplay-si-quan"],
    lastReviewed: "Nguồn Google Doc",
    source: source("Thuật ngữ nhập vai"),
  },
];

export const lawBySlug = new Map(laws.map((law) => [law.slug, law]));
