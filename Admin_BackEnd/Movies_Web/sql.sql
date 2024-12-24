-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               11.3.2-MariaDB - mariadb.org binary distribution
-- Server OS:                    Win64
-- HeidiSQL Version:             12.6.0.6765
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

-- Dumping data for table movies_web.admin: ~1 rows (approximately)
INSERT INTO `admin` (`admin_id`, `email`, `password`, `role`, `username`) VALUES
	(1, 'nguyentruongan0610@gmail.com', 'admin', 'ADMIN', 'admin');

-- Dumping data for table movies_web.category: ~6 rows (approximately)
INSERT INTO `category` (`category_id`, `name`) VALUES
	(1, 'Phim Mới'),
	(2, 'Phim Bộ'),
	(3, 'Phim Lẻ'),
	(4, 'Phim Shows'),
	(5, 'Hoạt Hình'),
	(6, 'Sắp Chiếu');

-- Dumping data for table movies_web.country: ~35 rows (approximately)
INSERT INTO `country` (`country_id`, `name`) VALUES
	(1, 'Trung Quốc'),
	(2, 'Thái Lan'),
	(3, 'Hồng Kông'),
	(4, 'Pháp'),
	(5, 'Đức'),
	(6, 'Hà Lan'),
	(7, 'Mexico'),
	(8, 'Thụy Điển'),
	(9, 'Philippines'),
	(10, 'Đan Mạch'),
	(11, 'Thụy Sĩ'),
	(12, 'Ukraina'),
	(13, 'Hàn Quốc'),
	(14, 'Âu Mỹ'),
	(15, 'Ấn Độ'),
	(16, 'Canada'),
	(17, 'Tây Ban Nha'),
	(18, 'Indonesia'),
	(19, 'Ba lan'),
	(20, 'Malaysia'),
	(21, 'Bồ Đào Nha'),
	(22, 'UAE'),
	(23, 'Châu Phi'),
	(24, 'Ả Rập Xê Út'),
	(25, 'Nhật Bản'),
	(26, 'Đài Loan'),
	(27, 'Anh'),
	(28, 'Quốc Gia Khác'),
	(29, 'Thổ Nhĩ Kỳ'),
	(30, 'Nga'),
	(31, 'Úc'),
	(32, 'Brazil'),
	(33, 'Ý'),
	(34, 'Na Uy'),
	(35, 'Nam Phi');

-- Dumping data for table movies_web.movie: ~0 rows (approximately)
INSERT INTO `movie` (`movie_id`, `description`, `link`, `release_year`, `thumb_url`, `title`, `country_id`) VALUES
	(1, 'Bộ phim diễn ra vào thời kỳ Trung Hoa Dân quốc, kể về Mục Nguyên đang đối diện với cái chết, trong trí óc, anh ta tự tưởng tượng ra một bản thân mới là cảnh sát Triệu Nhân. Khi Triệu Nhân khám phá ra sự thật đằng sau những sự việc chấn động kỳ quái, Mục Nguyên cũng hoàn thành sự cứu rỗi tâm hồn của mình trước khi qua đời. Với các tình tiết căng thẳng, câu chuyện kể về một câu chuyện triết học xoay quanh việc cứu rỗi tâm hồn. Nó nhằm mục đích truyền tải đến khán giả rằng chỉ có dũng cảm đối mặt với những sai lầm, đau khổ trong quá khứ, chúng ta mới có thể thực sự cởi bỏ những nút thắt bên trong, bước ra khỏi sương mù và giành lại cuộc sống mới.', 'https://vip.opstream11.com/share/23f4bda09be3089bd9a47476b9600c99', 2023, 'trung-ta-thumb.avif', 'Trúng Tà', 1);

-- Dumping data for table movies_web.movie_category: ~0 rows (approximately)
INSERT INTO `movie_category` (`movie_id`, `category_id`) VALUES
	(1, 3);

-- Dumping data for table movies_web.movie_genre: ~0 rows (approximately)
INSERT INTO `movie_genre` (`movie_id`, `movie_type_id`) VALUES
	(1, 5);

-- Dumping data for table movies_web.movie_type: ~22 rows (approximately)
INSERT INTO `movie_type` (`movie_type_id`, `type_name`) VALUES
	(1, 'Hành Động'),
	(2, 'Cổ Trang'),
	(3, 'Chiến Tranh'),
	(4, 'Viễn Tưởng'),
	(5, 'Kinh Dị'),
	(6, 'Tài Liệu'),
	(7, 'Bí ẩn'),
	(9, 'Tình Cảm'),
	(10, 'Tâm Lý'),
	(11, 'Thể Thao'),
	(12, 'Phiêu Lưu'),
	(13, 'Âm Nhạc'),
	(14, 'Gia Đình'),
	(15, 'Học Đường'),
	(16, 'Hài Hước'),
	(17, 'Hình Sự'),
	(18, 'Võ Thuật'),
	(19, 'Khoa Học'),
	(20, 'Thần Thoại'),
	(21, 'Chính kịch'),
	(22, 'Kinh Điển'),
	(24, 'Phim 18+');

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
