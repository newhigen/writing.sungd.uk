# writing.sungd.uk

책, 생각에 대해 쓴 글. [astro-chiri](https://github.com/the3ash/astro-chiri) 테마를 고쳐 쓴 Astro 사이트.

## 실행

```sh
pnpm install
pnpm dev
pnpm new       # 새 글 틀 만들기
```

## 어디를 고치나

글은 `src/blog-writing/posts/` 에 `YYMMDD_slug.md`. 프론트매터로 주소와 분류가 정해진다.

```yaml
pubDate: 2026-06-10
title: 더 기버 1
slug: the-go-giver-1 # 없으면 파일명이 주소가 된다
category: 책 # 책, 생각. 없으면 홈의 "글" 필터에 묶인다
tags: [독서]
```

- 초고는 `src/blog-writing/draft/` 에 두거나 파일명 앞에 `_` 를 붙인다. 빌드에서 빠진다.
- 읽은 책 기록은 `src/data/books.csv`. books.sungd.uk 가 이 파일을 원격으로 읽는 정본이다.

## 배포

main 에 머지하면 GitHub Actions 가 빌드해 Pages 로 올린다.

## ⚠ 경고

- push 전에 `pnpm format:check`. 실패하면 `pnpm format` 뒤 커밋.
- 기술 글은 쓰지 않는다. 있던 12편은 2026-09-14 에 https://dev.sungd.uk/notes/ 로 옮겼다.
- 링크 카드는 꺼져 있다. 서버 라우트가 필요한데 Pages 는 정적만 서빙한다 (`src/config.ts` 의 `linkCard`).
- 테마 원본을 따라가려면 `pnpm update-theme`.
