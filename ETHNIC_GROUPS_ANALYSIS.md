# Analysis of 54 Ethnic Groups - Museum Structure

## 1. Content Structure Analysis

The file `DÂN_TỘC.txt` contains information about all 54 officially recognized ethnic groups in Vietnam. The content is organized as follows:

### Structure Pattern:
- Each ethnic group starts with: `DÂN TỘC [NAME]`
- Followed by detailed description of the ethnic group
- Descriptions include: origin, population, geographic distribution, language, traditional clothing, customs, and livelihood

### Content Characteristics:
- Total: 54 ethnic groups
- File size: 474 lines
- Descriptions vary in length (from a few sentences to several paragraphs)
- Rich cultural and historical information for each group

## 2. Complete List of 54 Ethnic Groups

### Room 1 (IDs 1-18):
1. KINH - People's majority, 86.2% of Vietnam's population
2. TÀY - Second largest ethnic group
3. THÁI - From Northwest Vietnam
4. MƯỜNG - Related to Kinh people
5. H'MÔNG - Hmong-Mien language family
6. KHMER - Mainly in Cambodia and Southern Vietnam
7. NÙNG - Related to Tày and Zhuang people
8. DAO - Various subgroups (Dao Đỏ, Dao Thanh Y, etc.)
9. HOA - Chinese ethnic group
10. GIA RAI - Central Highlands
11. Ê ĐÊ - Matriarchal society in Central Highlands
12. BA NA - Kon Tum, Gia Lai provinces
13. XƠ ĐĂNG - Northern Central Highlands
14. SÁN CHAY - Northeast Vietnam
15. CỜ HO - Southern Central Highlands
16. SÁN DÌU - Related to Dao people
17. CHĂM - Cham civilization
18. HRÊ - Central Highlands

### Room 2 (IDs 19-36):
19. RAGLAY - Southern Central Highlands
20. MNÔNG - Đắk Lắk province
21. X'TIÊNG - Bình Phước, Đồng Nai
22. BRU-VÂN KIỀU - Quảng Trị province
23. THỔ - Nghệ An, Thanh Hóa
24. KHƠ MÚ - Northwest Vietnam
25. CƠ TU - Quảng Nam, Thừa Thiên Huế
26. GIÁY - Lào Cai, Hà Giang
27. GIẺ TRIÊNG - Kon Tum, Gia Lai
28. TÀ ÔI - Quảng Nam, Kon Tum
29. MẠ - Lâm Đồng province
30. CO - Quảng Ngãi province
31. CHƠ RO - Southern Vietnam
32. XINH MUN - Sơn La, Lai Châu
33. HÀ NHỈ - Lai Châu, Lào Cai
34. CHU RU - Southern Central Highlands
35. LÀO - Northwest Vietnam
36. KHÁNG - Northwest Vietnam

### Room 3 (IDs 37-54):
37. LA CHÍ - Lai Châu, Lào Cai
38. PHÙ LÁ - Lai Châu, Lào Cai
39. LA HỦ - Northwest Vietnam
40. LA HA - Northwest Vietnam
41. PÀ THẺN - Hà Giang province
42. CHỨT - Quảng Bình, Hà Tĩnh
43. LỰ - Lai Châu province
44. LÔ LÔ - Hà Giang, Cao Bằng
45. MẢNG - Northwest Vietnam
46. CỜ LAO - Islands (Chăm Pa origin)
47. BỐ Y - Hà Giang, Lào Cai
48. CỐNG - Lai Châu province
49. NGÁI - Northeast Vietnam
50. SI LA - Lai Châu province
51. PU PÉO - Hà Giang province
52. RƠ MĂM - Kon Tum province
53. BRÂU - Kon Tum province
54. Ơ ĐU - Nghệ An province

## 3. Room Distribution

The 54 ethnic groups have been evenly distributed into 3 museum rooms:

- **Room 1 (content_room1/)**: Ethnic groups 1-18
  - Images: 1.jpg to 18.jpg
  - Focus: Major ethnic groups and Central Highlands peoples

- **Room 2 (content_room2/)**: Ethnic groups 19-36
  - Images: 19.jpg to 36.jpg
  - Focus: Central Highlands and mountain peoples

- **Room 3 (content_room3/)**: Ethnic groups 37-54
  - Images: 37.jpg to 54.jpg
  - Focus: Small ethnic minorities, mainly in Northwest Vietnam

## 4. JSON Structure

Each ethnic group is represented with the following structure:

```json
{
  "id": 1-54,
  "name": "Ethnic group name",
  "image": "content_roomN/ID.jpg",
  "description": "Detailed description extracted from source file"
}
```

## 5. Image Mapping

Images are organized by room:
- Room 1: /public/content_room1/1.jpg through 18.jpg
- Room 2: /public/content_room2/19.jpg through 36.jpg
- Room 3: /public/content_room3/37.jpg through 54.jpg

Note: Based on the git status, images exist for:
- Room 1: 1.jpg through 29.jpg
- Room 2: 30.jpg through 54.jpg

## 6. Implementation Notes

- Total file generated: `ethnic_groups_museum.json`
- Format: UTF-8 encoded JSON
- All descriptions maintain original Vietnamese text with diacritics
- Descriptions are cleaned (whitespace normalized, but full content preserved)

## 7. Usage in museum.html

The JSON file can be loaded and used to dynamically populate the museum exhibits. Each room can display its respective ethnic groups with their images and descriptions.
