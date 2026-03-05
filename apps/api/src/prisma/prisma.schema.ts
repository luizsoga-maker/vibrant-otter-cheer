model User {
  id        Int      @id @default(autoincrement())
  email     String   @unique
  name      String?
  passwordHash String
  sites     Site[]
  billing   Billing?
}

model Site {
  id        Int      @id @default(autoincrement())
  name      String
  slug      String
  theme     Theme
  status    Status   @default("DRAFT")
  pages     Page[]
  assets    Asset[]
}

model Theme {
  id        Int      @id @default(autoincrement())
  colors    ThemeColors
  typography ThemeTypography
}

model ThemeColors {
  primary   String
  secondary String
  background String
  text      String
}

model ThemeTypography {
  fontFamily String
  fontSize   String
  lineHeight String
}

model Page {
  id        Int      @id @default(autoincrement())
  siteId    Int
  slug      String
  title     String
  sections  Json
}

model Section {
  id        Int      @id @default(autoincrement())
  pageId    Int
  type      String
  props     Json
}

model Asset {
  id        Int      @id @default(autoincrement())
  key       String
  url       String
  filename  String
  size      Int
  type      String
}

model Billing {
  id            Int      @id @default(autoincrement())
  userId        Int
  plan          String
  stripeCustomerId String
  status        Status   @default("ACTIVE")
  subscription  Subscription?
}

model Subscription {
  id            Int      @id @default(autoincrement())
  customerId    String
  status        Status   @default("ACTIVE")
  currentPeriodEnd DateTime
  trialEnd      DateTime?
}

enum Status {
  DRAFT
  ACTIVE
  PAST_DUE
  CANCELLED
}