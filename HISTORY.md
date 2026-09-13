# HISTORY

## 2026-09-13 — 첫 화면을 「문장」 배치로 바꿈

무엇: 첫 화면을 글 목록 하나에서, 최근 여섯 편은 종류·날짜·제목에 첫 두 줄을 붙여 보여주고 그 아래 「그 밖의 글」 열두 줄을 두는 배치로 바꿨다. 왼쪽에 세로 차림표(글·독서 기록·영화·시리즈·소개)와 독서 기록 히트맵을 두어 모든 화면에 남긴다. 히트맵은 위젯 넷을 토글하던 것에서 독서 기록 하나로 줄였다.

왜: 이전 화면은 astro-chiri 테마 그대로라 stephango 류 블로그와 구분이 안 됐고, 히트맵 넷이 첫 화면 절반을 차지했다. 시안 아홉을 놓고 고른 것이 macwright.com 구조를 가져온 「서랍」이었고, 그 골격 위에 글쓰기·독서 블로그에 맞춘 시안 넷(일기·문장·전문·서재)을 놓고 「문장」을 골랐다.

- 이 블로그는 글쓰기와 독서·서평만 다룬다. 기술 글(category 기술이거나 개발·Claude·Claude Code·DevEnv 태그)은 다른 블로그로 옮길 것이라 첫 화면에서 뺐다. 주소와 RSS 로는 그대로 열린다.
- 글꼴은 Noto Sans KR 로 통일하고 자간 조정을 없앴다. 색은 회색 다섯 단(#24262a·#8b8f96·#c9ccd2·#ececef).
- 지운 것: ReadingHeatmap·WritingHeatmap·MovieHeatmap·CombinedHeatmap·PostList·TagFilter·Header·BackButton·About. 되살릴 일이 있으면 이 커밋 이전 git 에 있다.
- 본문 폭 35rem → 50rem(차림표 13rem + 본문).
