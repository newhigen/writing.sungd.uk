# HISTORY

## 2026-09-13 — 첫 화면을 「서랍」 골격으로 바꿈

무엇: 첫 화면을 글 목록 하나에서 종류별 묶음(글·서평·독서 기록·기술)으로 바꾸고, 왼쪽에 세로 차림표를 두어 모든 화면에 남긴다. 히트맵은 위젯 넷을 토글하던 것에서 독서 기록 묶음 하나로 줄였다.

왜: 이전 화면은 astro-chiri 테마 그대로라 stephango 류 블로그와 구분이 안 됐고, 히트맵 넷이 첫 화면 절반을 차지했다. 시안 아홉을 놓고 고른 것이 macwright.com 구조를 가져온 「서랍」.

- 글꼴은 Noto Sans KR 로 통일하고 자간 조정을 없앴다. 색은 회색 다섯 단(#24262a·#8b8f96·#c9ccd2·#ececef).
- 「기술」 묶음은 category 가 기술이거나 개발·Claude·Claude Code·DevEnv 태그가 붙은 글.
- 지운 것: ReadingHeatmap·WritingHeatmap·MovieHeatmap·CombinedHeatmap·PostList·TagFilter·Header·BackButton. 되살릴 일이 있으면 이 커밋 이전 git 에 있다.
- 본문 폭 35rem → 46rem(차림표 8rem + 본문 36rem).
