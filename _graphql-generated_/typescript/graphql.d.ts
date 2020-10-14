type Maybe<T> = T | null
type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] }
/** All built-in and custom scalars, mapped to their actual values */
type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  /** A date string, such as 2007-12-03, compliant with the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: string
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: unknown
}

type GQLBooleanQueryOperatorInput = {
  eq?: Maybe<Scalars["Boolean"]>
  ne?: Maybe<Scalars["Boolean"]>
  in?: Maybe<Array<Maybe<Scalars["Boolean"]>>>
  nin?: Maybe<Array<Maybe<Scalars["Boolean"]>>>
}

type GQLDateQueryOperatorInput = {
  eq?: Maybe<Scalars["Date"]>
  ne?: Maybe<Scalars["Date"]>
  gt?: Maybe<Scalars["Date"]>
  gte?: Maybe<Scalars["Date"]>
  lt?: Maybe<Scalars["Date"]>
  lte?: Maybe<Scalars["Date"]>
  in?: Maybe<Array<Maybe<Scalars["Date"]>>>
  nin?: Maybe<Array<Maybe<Scalars["Date"]>>>
}

type GQLDirectory = GQLNode & {
  sourceInstanceName: Scalars["String"]
  absolutePath: Scalars["String"]
  relativePath: Scalars["String"]
  extension: Scalars["String"]
  size: Scalars["Int"]
  prettySize: Scalars["String"]
  modifiedTime: Scalars["Date"]
  accessTime: Scalars["Date"]
  changeTime: Scalars["Date"]
  birthTime: Scalars["Date"]
  root: Scalars["String"]
  dir: Scalars["String"]
  base: Scalars["String"]
  ext: Scalars["String"]
  name: Scalars["String"]
  relativeDirectory: Scalars["String"]
  dev: Scalars["Int"]
  mode: Scalars["Int"]
  nlink: Scalars["Int"]
  uid: Scalars["Int"]
  gid: Scalars["Int"]
  rdev: Scalars["Int"]
  ino: Scalars["Float"]
  atimeMs: Scalars["Float"]
  mtimeMs: Scalars["Float"]
  ctimeMs: Scalars["Float"]
  atime: Scalars["Date"]
  mtime: Scalars["Date"]
  ctime: Scalars["Date"]
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars["Date"]>
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars["Float"]>
  blksize?: Maybe<Scalars["Int"]>
  blocks?: Maybe<Scalars["Int"]>
  id: Scalars["ID"]
  parent?: Maybe<GQLNode>
  children: Array<GQLNode>
  internal: GQLInternal
}

type GQLDirectoryModifiedTimeArgs = {
  formatString?: Maybe<Scalars["String"]>
  fromNow?: Maybe<Scalars["Boolean"]>
  difference?: Maybe<Scalars["String"]>
  locale?: Maybe<Scalars["String"]>
}

type GQLDirectoryAccessTimeArgs = {
  formatString?: Maybe<Scalars["String"]>
  fromNow?: Maybe<Scalars["Boolean"]>
  difference?: Maybe<Scalars["String"]>
  locale?: Maybe<Scalars["String"]>
}

type GQLDirectoryChangeTimeArgs = {
  formatString?: Maybe<Scalars["String"]>
  fromNow?: Maybe<Scalars["Boolean"]>
  difference?: Maybe<Scalars["String"]>
  locale?: Maybe<Scalars["String"]>
}

type GQLDirectoryBirthTimeArgs = {
  formatString?: Maybe<Scalars["String"]>
  fromNow?: Maybe<Scalars["Boolean"]>
  difference?: Maybe<Scalars["String"]>
  locale?: Maybe<Scalars["String"]>
}

type GQLDirectoryAtimeArgs = {
  formatString?: Maybe<Scalars["String"]>
  fromNow?: Maybe<Scalars["Boolean"]>
  difference?: Maybe<Scalars["String"]>
  locale?: Maybe<Scalars["String"]>
}

type GQLDirectoryMtimeArgs = {
  formatString?: Maybe<Scalars["String"]>
  fromNow?: Maybe<Scalars["Boolean"]>
  difference?: Maybe<Scalars["String"]>
  locale?: Maybe<Scalars["String"]>
}

type GQLDirectoryCtimeArgs = {
  formatString?: Maybe<Scalars["String"]>
  fromNow?: Maybe<Scalars["Boolean"]>
  difference?: Maybe<Scalars["String"]>
  locale?: Maybe<Scalars["String"]>
}

type GQLDirectoryConnection = {
  totalCount: Scalars["Int"]
  edges: Array<GQLDirectoryEdge>
  nodes: Array<GQLDirectory>
  pageInfo: GQLPageInfo
  distinct: Array<Scalars["String"]>
  group: Array<GQLDirectoryGroupConnection>
}

type GQLDirectoryConnectionDistinctArgs = {
  field: GQLDirectoryFieldsEnum
}

type GQLDirectoryConnectionGroupArgs = {
  skip?: Maybe<Scalars["Int"]>
  limit?: Maybe<Scalars["Int"]>
  field: GQLDirectoryFieldsEnum
}

type GQLDirectoryEdge = {
  next?: Maybe<GQLDirectory>
  node: GQLDirectory
  previous?: Maybe<GQLDirectory>
}

type GQLDirectoryFieldsEnum =
  | "sourceInstanceName"
  | "absolutePath"
  | "relativePath"
  | "extension"
  | "size"
  | "prettySize"
  | "modifiedTime"
  | "accessTime"
  | "changeTime"
  | "birthTime"
  | "root"
  | "dir"
  | "base"
  | "ext"
  | "name"
  | "relativeDirectory"
  | "dev"
  | "mode"
  | "nlink"
  | "uid"
  | "gid"
  | "rdev"
  | "ino"
  | "atimeMs"
  | "mtimeMs"
  | "ctimeMs"
  | "atime"
  | "mtime"
  | "ctime"
  | "birthtime"
  | "birthtimeMs"
  | "blksize"
  | "blocks"
  | "id"
  | "parent___id"
  | "parent___parent___id"
  | "parent___parent___parent___id"
  | "parent___parent___parent___children"
  | "parent___parent___children"
  | "parent___parent___children___id"
  | "parent___parent___children___children"
  | "parent___parent___internal___content"
  | "parent___parent___internal___contentDigest"
  | "parent___parent___internal___description"
  | "parent___parent___internal___fieldOwners"
  | "parent___parent___internal___ignoreType"
  | "parent___parent___internal___mediaType"
  | "parent___parent___internal___owner"
  | "parent___parent___internal___type"
  | "parent___children"
  | "parent___children___id"
  | "parent___children___parent___id"
  | "parent___children___parent___children"
  | "parent___children___children"
  | "parent___children___children___id"
  | "parent___children___children___children"
  | "parent___children___internal___content"
  | "parent___children___internal___contentDigest"
  | "parent___children___internal___description"
  | "parent___children___internal___fieldOwners"
  | "parent___children___internal___ignoreType"
  | "parent___children___internal___mediaType"
  | "parent___children___internal___owner"
  | "parent___children___internal___type"
  | "parent___internal___content"
  | "parent___internal___contentDigest"
  | "parent___internal___description"
  | "parent___internal___fieldOwners"
  | "parent___internal___ignoreType"
  | "parent___internal___mediaType"
  | "parent___internal___owner"
  | "parent___internal___type"
  | "children"
  | "children___id"
  | "children___parent___id"
  | "children___parent___parent___id"
  | "children___parent___parent___children"
  | "children___parent___children"
  | "children___parent___children___id"
  | "children___parent___children___children"
  | "children___parent___internal___content"
  | "children___parent___internal___contentDigest"
  | "children___parent___internal___description"
  | "children___parent___internal___fieldOwners"
  | "children___parent___internal___ignoreType"
  | "children___parent___internal___mediaType"
  | "children___parent___internal___owner"
  | "children___parent___internal___type"
  | "children___children"
  | "children___children___id"
  | "children___children___parent___id"
  | "children___children___parent___children"
  | "children___children___children"
  | "children___children___children___id"
  | "children___children___children___children"
  | "children___children___internal___content"
  | "children___children___internal___contentDigest"
  | "children___children___internal___description"
  | "children___children___internal___fieldOwners"
  | "children___children___internal___ignoreType"
  | "children___children___internal___mediaType"
  | "children___children___internal___owner"
  | "children___children___internal___type"
  | "children___internal___content"
  | "children___internal___contentDigest"
  | "children___internal___description"
  | "children___internal___fieldOwners"
  | "children___internal___ignoreType"
  | "children___internal___mediaType"
  | "children___internal___owner"
  | "children___internal___type"
  | "internal___content"
  | "internal___contentDigest"
  | "internal___description"
  | "internal___fieldOwners"
  | "internal___ignoreType"
  | "internal___mediaType"
  | "internal___owner"
  | "internal___type"

type GQLDirectoryFilterInput = {
  sourceInstanceName?: Maybe<GQLStringQueryOperatorInput>
  absolutePath?: Maybe<GQLStringQueryOperatorInput>
  relativePath?: Maybe<GQLStringQueryOperatorInput>
  extension?: Maybe<GQLStringQueryOperatorInput>
  size?: Maybe<GQLIntQueryOperatorInput>
  prettySize?: Maybe<GQLStringQueryOperatorInput>
  modifiedTime?: Maybe<GQLDateQueryOperatorInput>
  accessTime?: Maybe<GQLDateQueryOperatorInput>
  changeTime?: Maybe<GQLDateQueryOperatorInput>
  birthTime?: Maybe<GQLDateQueryOperatorInput>
  root?: Maybe<GQLStringQueryOperatorInput>
  dir?: Maybe<GQLStringQueryOperatorInput>
  base?: Maybe<GQLStringQueryOperatorInput>
  ext?: Maybe<GQLStringQueryOperatorInput>
  name?: Maybe<GQLStringQueryOperatorInput>
  relativeDirectory?: Maybe<GQLStringQueryOperatorInput>
  dev?: Maybe<GQLIntQueryOperatorInput>
  mode?: Maybe<GQLIntQueryOperatorInput>
  nlink?: Maybe<GQLIntQueryOperatorInput>
  uid?: Maybe<GQLIntQueryOperatorInput>
  gid?: Maybe<GQLIntQueryOperatorInput>
  rdev?: Maybe<GQLIntQueryOperatorInput>
  ino?: Maybe<GQLFloatQueryOperatorInput>
  atimeMs?: Maybe<GQLFloatQueryOperatorInput>
  mtimeMs?: Maybe<GQLFloatQueryOperatorInput>
  ctimeMs?: Maybe<GQLFloatQueryOperatorInput>
  atime?: Maybe<GQLDateQueryOperatorInput>
  mtime?: Maybe<GQLDateQueryOperatorInput>
  ctime?: Maybe<GQLDateQueryOperatorInput>
  birthtime?: Maybe<GQLDateQueryOperatorInput>
  birthtimeMs?: Maybe<GQLFloatQueryOperatorInput>
  blksize?: Maybe<GQLIntQueryOperatorInput>
  blocks?: Maybe<GQLIntQueryOperatorInput>
  id?: Maybe<GQLStringQueryOperatorInput>
  parent?: Maybe<GQLNodeFilterInput>
  children?: Maybe<GQLNodeFilterListInput>
  internal?: Maybe<GQLInternalFilterInput>
}

type GQLDirectoryGroupConnection = {
  totalCount: Scalars["Int"]
  edges: Array<GQLDirectoryEdge>
  nodes: Array<GQLDirectory>
  pageInfo: GQLPageInfo
  field: Scalars["String"]
  fieldValue?: Maybe<Scalars["String"]>
}

type GQLDirectorySortInput = {
  fields?: Maybe<Array<Maybe<GQLDirectoryFieldsEnum>>>
  order?: Maybe<Array<Maybe<GQLSortOrderEnum>>>
}

type GQLDuotoneGradient = {
  highlight: Scalars["String"]
  shadow: Scalars["String"]
  opacity?: Maybe<Scalars["Int"]>
}

type GQLFile = GQLNode & {
  sourceInstanceName: Scalars["String"]
  absolutePath: Scalars["String"]
  relativePath: Scalars["String"]
  extension: Scalars["String"]
  size: Scalars["Int"]
  prettySize: Scalars["String"]
  modifiedTime: Scalars["Date"]
  accessTime: Scalars["Date"]
  changeTime: Scalars["Date"]
  birthTime: Scalars["Date"]
  root: Scalars["String"]
  dir: Scalars["String"]
  base: Scalars["String"]
  ext: Scalars["String"]
  name: Scalars["String"]
  relativeDirectory: Scalars["String"]
  dev: Scalars["Int"]
  mode: Scalars["Int"]
  nlink: Scalars["Int"]
  uid: Scalars["Int"]
  gid: Scalars["Int"]
  rdev: Scalars["Int"]
  ino: Scalars["Float"]
  atimeMs: Scalars["Float"]
  mtimeMs: Scalars["Float"]
  ctimeMs: Scalars["Float"]
  atime: Scalars["Date"]
  mtime: Scalars["Date"]
  ctime: Scalars["Date"]
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars["Date"]>
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars["Float"]>
  blksize?: Maybe<Scalars["Int"]>
  blocks?: Maybe<Scalars["Int"]>
  /** Copy file to static directory and return public url to it */
  publicURL?: Maybe<Scalars["String"]>
  childImageSharp?: Maybe<GQLImageSharp>
  id: Scalars["ID"]
  parent?: Maybe<GQLNode>
  children: Array<GQLNode>
  internal: GQLInternal
}

type GQLFileModifiedTimeArgs = {
  formatString?: Maybe<Scalars["String"]>
  fromNow?: Maybe<Scalars["Boolean"]>
  difference?: Maybe<Scalars["String"]>
  locale?: Maybe<Scalars["String"]>
}

type GQLFileAccessTimeArgs = {
  formatString?: Maybe<Scalars["String"]>
  fromNow?: Maybe<Scalars["Boolean"]>
  difference?: Maybe<Scalars["String"]>
  locale?: Maybe<Scalars["String"]>
}

type GQLFileChangeTimeArgs = {
  formatString?: Maybe<Scalars["String"]>
  fromNow?: Maybe<Scalars["Boolean"]>
  difference?: Maybe<Scalars["String"]>
  locale?: Maybe<Scalars["String"]>
}

type GQLFileBirthTimeArgs = {
  formatString?: Maybe<Scalars["String"]>
  fromNow?: Maybe<Scalars["Boolean"]>
  difference?: Maybe<Scalars["String"]>
  locale?: Maybe<Scalars["String"]>
}

type GQLFileAtimeArgs = {
  formatString?: Maybe<Scalars["String"]>
  fromNow?: Maybe<Scalars["Boolean"]>
  difference?: Maybe<Scalars["String"]>
  locale?: Maybe<Scalars["String"]>
}

type GQLFileMtimeArgs = {
  formatString?: Maybe<Scalars["String"]>
  fromNow?: Maybe<Scalars["Boolean"]>
  difference?: Maybe<Scalars["String"]>
  locale?: Maybe<Scalars["String"]>
}

type GQLFileCtimeArgs = {
  formatString?: Maybe<Scalars["String"]>
  fromNow?: Maybe<Scalars["Boolean"]>
  difference?: Maybe<Scalars["String"]>
  locale?: Maybe<Scalars["String"]>
}

type GQLFileConnection = {
  totalCount: Scalars["Int"]
  edges: Array<GQLFileEdge>
  nodes: Array<GQLFile>
  pageInfo: GQLPageInfo
  distinct: Array<Scalars["String"]>
  group: Array<GQLFileGroupConnection>
}

type GQLFileConnectionDistinctArgs = {
  field: GQLFileFieldsEnum
}

type GQLFileConnectionGroupArgs = {
  skip?: Maybe<Scalars["Int"]>
  limit?: Maybe<Scalars["Int"]>
  field: GQLFileFieldsEnum
}

type GQLFileEdge = {
  next?: Maybe<GQLFile>
  node: GQLFile
  previous?: Maybe<GQLFile>
}

type GQLFileFieldsEnum =
  | "sourceInstanceName"
  | "absolutePath"
  | "relativePath"
  | "extension"
  | "size"
  | "prettySize"
  | "modifiedTime"
  | "accessTime"
  | "changeTime"
  | "birthTime"
  | "root"
  | "dir"
  | "base"
  | "ext"
  | "name"
  | "relativeDirectory"
  | "dev"
  | "mode"
  | "nlink"
  | "uid"
  | "gid"
  | "rdev"
  | "ino"
  | "atimeMs"
  | "mtimeMs"
  | "ctimeMs"
  | "atime"
  | "mtime"
  | "ctime"
  | "birthtime"
  | "birthtimeMs"
  | "blksize"
  | "blocks"
  | "publicURL"
  | "childImageSharp___fixed___base64"
  | "childImageSharp___fixed___tracedSVG"
  | "childImageSharp___fixed___aspectRatio"
  | "childImageSharp___fixed___width"
  | "childImageSharp___fixed___height"
  | "childImageSharp___fixed___src"
  | "childImageSharp___fixed___srcSet"
  | "childImageSharp___fixed___srcWebp"
  | "childImageSharp___fixed___srcSetWebp"
  | "childImageSharp___fixed___originalName"
  | "childImageSharp___resolutions___base64"
  | "childImageSharp___resolutions___tracedSVG"
  | "childImageSharp___resolutions___aspectRatio"
  | "childImageSharp___resolutions___width"
  | "childImageSharp___resolutions___height"
  | "childImageSharp___resolutions___src"
  | "childImageSharp___resolutions___srcSet"
  | "childImageSharp___resolutions___srcWebp"
  | "childImageSharp___resolutions___srcSetWebp"
  | "childImageSharp___resolutions___originalName"
  | "childImageSharp___fluid___base64"
  | "childImageSharp___fluid___tracedSVG"
  | "childImageSharp___fluid___aspectRatio"
  | "childImageSharp___fluid___src"
  | "childImageSharp___fluid___srcSet"
  | "childImageSharp___fluid___srcWebp"
  | "childImageSharp___fluid___srcSetWebp"
  | "childImageSharp___fluid___sizes"
  | "childImageSharp___fluid___originalImg"
  | "childImageSharp___fluid___originalName"
  | "childImageSharp___fluid___presentationWidth"
  | "childImageSharp___fluid___presentationHeight"
  | "childImageSharp___sizes___base64"
  | "childImageSharp___sizes___tracedSVG"
  | "childImageSharp___sizes___aspectRatio"
  | "childImageSharp___sizes___src"
  | "childImageSharp___sizes___srcSet"
  | "childImageSharp___sizes___srcWebp"
  | "childImageSharp___sizes___srcSetWebp"
  | "childImageSharp___sizes___sizes"
  | "childImageSharp___sizes___originalImg"
  | "childImageSharp___sizes___originalName"
  | "childImageSharp___sizes___presentationWidth"
  | "childImageSharp___sizes___presentationHeight"
  | "childImageSharp___original___width"
  | "childImageSharp___original___height"
  | "childImageSharp___original___src"
  | "childImageSharp___resize___src"
  | "childImageSharp___resize___tracedSVG"
  | "childImageSharp___resize___width"
  | "childImageSharp___resize___height"
  | "childImageSharp___resize___aspectRatio"
  | "childImageSharp___resize___originalName"
  | "childImageSharp___id"
  | "childImageSharp___parent___id"
  | "childImageSharp___parent___parent___id"
  | "childImageSharp___parent___parent___children"
  | "childImageSharp___parent___children"
  | "childImageSharp___parent___children___id"
  | "childImageSharp___parent___children___children"
  | "childImageSharp___parent___internal___content"
  | "childImageSharp___parent___internal___contentDigest"
  | "childImageSharp___parent___internal___description"
  | "childImageSharp___parent___internal___fieldOwners"
  | "childImageSharp___parent___internal___ignoreType"
  | "childImageSharp___parent___internal___mediaType"
  | "childImageSharp___parent___internal___owner"
  | "childImageSharp___parent___internal___type"
  | "childImageSharp___children"
  | "childImageSharp___children___id"
  | "childImageSharp___children___parent___id"
  | "childImageSharp___children___parent___children"
  | "childImageSharp___children___children"
  | "childImageSharp___children___children___id"
  | "childImageSharp___children___children___children"
  | "childImageSharp___children___internal___content"
  | "childImageSharp___children___internal___contentDigest"
  | "childImageSharp___children___internal___description"
  | "childImageSharp___children___internal___fieldOwners"
  | "childImageSharp___children___internal___ignoreType"
  | "childImageSharp___children___internal___mediaType"
  | "childImageSharp___children___internal___owner"
  | "childImageSharp___children___internal___type"
  | "childImageSharp___internal___content"
  | "childImageSharp___internal___contentDigest"
  | "childImageSharp___internal___description"
  | "childImageSharp___internal___fieldOwners"
  | "childImageSharp___internal___ignoreType"
  | "childImageSharp___internal___mediaType"
  | "childImageSharp___internal___owner"
  | "childImageSharp___internal___type"
  | "id"
  | "parent___id"
  | "parent___parent___id"
  | "parent___parent___parent___id"
  | "parent___parent___parent___children"
  | "parent___parent___children"
  | "parent___parent___children___id"
  | "parent___parent___children___children"
  | "parent___parent___internal___content"
  | "parent___parent___internal___contentDigest"
  | "parent___parent___internal___description"
  | "parent___parent___internal___fieldOwners"
  | "parent___parent___internal___ignoreType"
  | "parent___parent___internal___mediaType"
  | "parent___parent___internal___owner"
  | "parent___parent___internal___type"
  | "parent___children"
  | "parent___children___id"
  | "parent___children___parent___id"
  | "parent___children___parent___children"
  | "parent___children___children"
  | "parent___children___children___id"
  | "parent___children___children___children"
  | "parent___children___internal___content"
  | "parent___children___internal___contentDigest"
  | "parent___children___internal___description"
  | "parent___children___internal___fieldOwners"
  | "parent___children___internal___ignoreType"
  | "parent___children___internal___mediaType"
  | "parent___children___internal___owner"
  | "parent___children___internal___type"
  | "parent___internal___content"
  | "parent___internal___contentDigest"
  | "parent___internal___description"
  | "parent___internal___fieldOwners"
  | "parent___internal___ignoreType"
  | "parent___internal___mediaType"
  | "parent___internal___owner"
  | "parent___internal___type"
  | "children"
  | "children___id"
  | "children___parent___id"
  | "children___parent___parent___id"
  | "children___parent___parent___children"
  | "children___parent___children"
  | "children___parent___children___id"
  | "children___parent___children___children"
  | "children___parent___internal___content"
  | "children___parent___internal___contentDigest"
  | "children___parent___internal___description"
  | "children___parent___internal___fieldOwners"
  | "children___parent___internal___ignoreType"
  | "children___parent___internal___mediaType"
  | "children___parent___internal___owner"
  | "children___parent___internal___type"
  | "children___children"
  | "children___children___id"
  | "children___children___parent___id"
  | "children___children___parent___children"
  | "children___children___children"
  | "children___children___children___id"
  | "children___children___children___children"
  | "children___children___internal___content"
  | "children___children___internal___contentDigest"
  | "children___children___internal___description"
  | "children___children___internal___fieldOwners"
  | "children___children___internal___ignoreType"
  | "children___children___internal___mediaType"
  | "children___children___internal___owner"
  | "children___children___internal___type"
  | "children___internal___content"
  | "children___internal___contentDigest"
  | "children___internal___description"
  | "children___internal___fieldOwners"
  | "children___internal___ignoreType"
  | "children___internal___mediaType"
  | "children___internal___owner"
  | "children___internal___type"
  | "internal___content"
  | "internal___contentDigest"
  | "internal___description"
  | "internal___fieldOwners"
  | "internal___ignoreType"
  | "internal___mediaType"
  | "internal___owner"
  | "internal___type"

type GQLFileFilterInput = {
  sourceInstanceName?: Maybe<GQLStringQueryOperatorInput>
  absolutePath?: Maybe<GQLStringQueryOperatorInput>
  relativePath?: Maybe<GQLStringQueryOperatorInput>
  extension?: Maybe<GQLStringQueryOperatorInput>
  size?: Maybe<GQLIntQueryOperatorInput>
  prettySize?: Maybe<GQLStringQueryOperatorInput>
  modifiedTime?: Maybe<GQLDateQueryOperatorInput>
  accessTime?: Maybe<GQLDateQueryOperatorInput>
  changeTime?: Maybe<GQLDateQueryOperatorInput>
  birthTime?: Maybe<GQLDateQueryOperatorInput>
  root?: Maybe<GQLStringQueryOperatorInput>
  dir?: Maybe<GQLStringQueryOperatorInput>
  base?: Maybe<GQLStringQueryOperatorInput>
  ext?: Maybe<GQLStringQueryOperatorInput>
  name?: Maybe<GQLStringQueryOperatorInput>
  relativeDirectory?: Maybe<GQLStringQueryOperatorInput>
  dev?: Maybe<GQLIntQueryOperatorInput>
  mode?: Maybe<GQLIntQueryOperatorInput>
  nlink?: Maybe<GQLIntQueryOperatorInput>
  uid?: Maybe<GQLIntQueryOperatorInput>
  gid?: Maybe<GQLIntQueryOperatorInput>
  rdev?: Maybe<GQLIntQueryOperatorInput>
  ino?: Maybe<GQLFloatQueryOperatorInput>
  atimeMs?: Maybe<GQLFloatQueryOperatorInput>
  mtimeMs?: Maybe<GQLFloatQueryOperatorInput>
  ctimeMs?: Maybe<GQLFloatQueryOperatorInput>
  atime?: Maybe<GQLDateQueryOperatorInput>
  mtime?: Maybe<GQLDateQueryOperatorInput>
  ctime?: Maybe<GQLDateQueryOperatorInput>
  birthtime?: Maybe<GQLDateQueryOperatorInput>
  birthtimeMs?: Maybe<GQLFloatQueryOperatorInput>
  blksize?: Maybe<GQLIntQueryOperatorInput>
  blocks?: Maybe<GQLIntQueryOperatorInput>
  publicURL?: Maybe<GQLStringQueryOperatorInput>
  childImageSharp?: Maybe<GQLImageSharpFilterInput>
  id?: Maybe<GQLStringQueryOperatorInput>
  parent?: Maybe<GQLNodeFilterInput>
  children?: Maybe<GQLNodeFilterListInput>
  internal?: Maybe<GQLInternalFilterInput>
}

type GQLFileGroupConnection = {
  totalCount: Scalars["Int"]
  edges: Array<GQLFileEdge>
  nodes: Array<GQLFile>
  pageInfo: GQLPageInfo
  field: Scalars["String"]
  fieldValue?: Maybe<Scalars["String"]>
}

type GQLFileSortInput = {
  fields?: Maybe<Array<Maybe<GQLFileFieldsEnum>>>
  order?: Maybe<Array<Maybe<GQLSortOrderEnum>>>
}

type GQLFloatQueryOperatorInput = {
  eq?: Maybe<Scalars["Float"]>
  ne?: Maybe<Scalars["Float"]>
  gt?: Maybe<Scalars["Float"]>
  gte?: Maybe<Scalars["Float"]>
  lt?: Maybe<Scalars["Float"]>
  lte?: Maybe<Scalars["Float"]>
  in?: Maybe<Array<Maybe<Scalars["Float"]>>>
  nin?: Maybe<Array<Maybe<Scalars["Float"]>>>
}

type GQLImageCropFocus =
  | "CENTER"
  | "NORTH"
  | "NORTHEAST"
  | "EAST"
  | "SOUTHEAST"
  | "SOUTH"
  | "SOUTHWEST"
  | "WEST"
  | "NORTHWEST"
  | "ENTROPY"
  | "ATTENTION"

type GQLImageFit = "COVER" | "CONTAIN" | "FILL" | "INSIDE" | "OUTSIDE"

type GQLImageFormat = "NO_CHANGE" | "JPG" | "PNG" | "WEBP"

type GQLImageSharp = GQLNode & {
  fixed?: Maybe<GQLImageSharpFixed>
  /** @deprecated Resolutions was deprecated in Gatsby v2. It's been renamed to "fixed" https://example.com/write-docs-and-fix-this-example-link */
  resolutions?: Maybe<GQLImageSharpResolutions>
  fluid?: Maybe<GQLImageSharpFluid>
  /** @deprecated Sizes was deprecated in Gatsby v2. It's been renamed to "fluid" https://example.com/write-docs-and-fix-this-example-link */
  sizes?: Maybe<GQLImageSharpSizes>
  original?: Maybe<GQLImageSharpOriginal>
  resize?: Maybe<GQLImageSharpResize>
  id: Scalars["ID"]
  parent?: Maybe<GQLNode>
  children: Array<GQLNode>
  internal: GQLInternal
}

type GQLImageSharpFixedArgs = {
  width?: Maybe<Scalars["Int"]>
  height?: Maybe<Scalars["Int"]>
  base64Width?: Maybe<Scalars["Int"]>
  jpegProgressive?: Maybe<Scalars["Boolean"]>
  pngCompressionSpeed?: Maybe<Scalars["Int"]>
  grayscale?: Maybe<Scalars["Boolean"]>
  duotone?: Maybe<GQLDuotoneGradient>
  traceSVG?: Maybe<GQLPotrace>
  quality?: Maybe<Scalars["Int"]>
  jpegQuality?: Maybe<Scalars["Int"]>
  pngQuality?: Maybe<Scalars["Int"]>
  webpQuality?: Maybe<Scalars["Int"]>
  toFormat?: Maybe<GQLImageFormat>
  toFormatBase64?: Maybe<GQLImageFormat>
  cropFocus?: Maybe<GQLImageCropFocus>
  fit?: Maybe<GQLImageFit>
  background?: Maybe<Scalars["String"]>
  rotate?: Maybe<Scalars["Int"]>
  trim?: Maybe<Scalars["Float"]>
}

type GQLImageSharpResolutionsArgs = {
  width?: Maybe<Scalars["Int"]>
  height?: Maybe<Scalars["Int"]>
  base64Width?: Maybe<Scalars["Int"]>
  jpegProgressive?: Maybe<Scalars["Boolean"]>
  pngCompressionSpeed?: Maybe<Scalars["Int"]>
  grayscale?: Maybe<Scalars["Boolean"]>
  duotone?: Maybe<GQLDuotoneGradient>
  traceSVG?: Maybe<GQLPotrace>
  quality?: Maybe<Scalars["Int"]>
  jpegQuality?: Maybe<Scalars["Int"]>
  pngQuality?: Maybe<Scalars["Int"]>
  webpQuality?: Maybe<Scalars["Int"]>
  toFormat?: Maybe<GQLImageFormat>
  toFormatBase64?: Maybe<GQLImageFormat>
  cropFocus?: Maybe<GQLImageCropFocus>
  fit?: Maybe<GQLImageFit>
  background?: Maybe<Scalars["String"]>
  rotate?: Maybe<Scalars["Int"]>
  trim?: Maybe<Scalars["Float"]>
}

type GQLImageSharpFluidArgs = {
  maxWidth?: Maybe<Scalars["Int"]>
  maxHeight?: Maybe<Scalars["Int"]>
  base64Width?: Maybe<Scalars["Int"]>
  grayscale?: Maybe<Scalars["Boolean"]>
  jpegProgressive?: Maybe<Scalars["Boolean"]>
  pngCompressionSpeed?: Maybe<Scalars["Int"]>
  duotone?: Maybe<GQLDuotoneGradient>
  traceSVG?: Maybe<GQLPotrace>
  quality?: Maybe<Scalars["Int"]>
  jpegQuality?: Maybe<Scalars["Int"]>
  pngQuality?: Maybe<Scalars["Int"]>
  webpQuality?: Maybe<Scalars["Int"]>
  toFormat?: Maybe<GQLImageFormat>
  toFormatBase64?: Maybe<GQLImageFormat>
  cropFocus?: Maybe<GQLImageCropFocus>
  fit?: Maybe<GQLImageFit>
  background?: Maybe<Scalars["String"]>
  rotate?: Maybe<Scalars["Int"]>
  trim?: Maybe<Scalars["Float"]>
  sizes?: Maybe<Scalars["String"]>
  srcSetBreakpoints?: Maybe<Array<Maybe<Scalars["Int"]>>>
}

type GQLImageSharpSizesArgs = {
  maxWidth?: Maybe<Scalars["Int"]>
  maxHeight?: Maybe<Scalars["Int"]>
  base64Width?: Maybe<Scalars["Int"]>
  grayscale?: Maybe<Scalars["Boolean"]>
  jpegProgressive?: Maybe<Scalars["Boolean"]>
  pngCompressionSpeed?: Maybe<Scalars["Int"]>
  duotone?: Maybe<GQLDuotoneGradient>
  traceSVG?: Maybe<GQLPotrace>
  quality?: Maybe<Scalars["Int"]>
  jpegQuality?: Maybe<Scalars["Int"]>
  pngQuality?: Maybe<Scalars["Int"]>
  webpQuality?: Maybe<Scalars["Int"]>
  toFormat?: Maybe<GQLImageFormat>
  toFormatBase64?: Maybe<GQLImageFormat>
  cropFocus?: Maybe<GQLImageCropFocus>
  fit?: Maybe<GQLImageFit>
  background?: Maybe<Scalars["String"]>
  rotate?: Maybe<Scalars["Int"]>
  trim?: Maybe<Scalars["Float"]>
  sizes?: Maybe<Scalars["String"]>
  srcSetBreakpoints?: Maybe<Array<Maybe<Scalars["Int"]>>>
}

type GQLImageSharpResizeArgs = {
  width?: Maybe<Scalars["Int"]>
  height?: Maybe<Scalars["Int"]>
  quality?: Maybe<Scalars["Int"]>
  jpegQuality?: Maybe<Scalars["Int"]>
  pngQuality?: Maybe<Scalars["Int"]>
  webpQuality?: Maybe<Scalars["Int"]>
  jpegProgressive?: Maybe<Scalars["Boolean"]>
  pngCompressionLevel?: Maybe<Scalars["Int"]>
  pngCompressionSpeed?: Maybe<Scalars["Int"]>
  grayscale?: Maybe<Scalars["Boolean"]>
  duotone?: Maybe<GQLDuotoneGradient>
  base64?: Maybe<Scalars["Boolean"]>
  traceSVG?: Maybe<GQLPotrace>
  toFormat?: Maybe<GQLImageFormat>
  cropFocus?: Maybe<GQLImageCropFocus>
  fit?: Maybe<GQLImageFit>
  background?: Maybe<Scalars["String"]>
  rotate?: Maybe<Scalars["Int"]>
  trim?: Maybe<Scalars["Float"]>
}

type GQLImageSharpConnection = {
  totalCount: Scalars["Int"]
  edges: Array<GQLImageSharpEdge>
  nodes: Array<GQLImageSharp>
  pageInfo: GQLPageInfo
  distinct: Array<Scalars["String"]>
  group: Array<GQLImageSharpGroupConnection>
}

type GQLImageSharpConnectionDistinctArgs = {
  field: GQLImageSharpFieldsEnum
}

type GQLImageSharpConnectionGroupArgs = {
  skip?: Maybe<Scalars["Int"]>
  limit?: Maybe<Scalars["Int"]>
  field: GQLImageSharpFieldsEnum
}

type GQLImageSharpEdge = {
  next?: Maybe<GQLImageSharp>
  node: GQLImageSharp
  previous?: Maybe<GQLImageSharp>
}

type GQLImageSharpFieldsEnum =
  | "fixed___base64"
  | "fixed___tracedSVG"
  | "fixed___aspectRatio"
  | "fixed___width"
  | "fixed___height"
  | "fixed___src"
  | "fixed___srcSet"
  | "fixed___srcWebp"
  | "fixed___srcSetWebp"
  | "fixed___originalName"
  | "resolutions___base64"
  | "resolutions___tracedSVG"
  | "resolutions___aspectRatio"
  | "resolutions___width"
  | "resolutions___height"
  | "resolutions___src"
  | "resolutions___srcSet"
  | "resolutions___srcWebp"
  | "resolutions___srcSetWebp"
  | "resolutions___originalName"
  | "fluid___base64"
  | "fluid___tracedSVG"
  | "fluid___aspectRatio"
  | "fluid___src"
  | "fluid___srcSet"
  | "fluid___srcWebp"
  | "fluid___srcSetWebp"
  | "fluid___sizes"
  | "fluid___originalImg"
  | "fluid___originalName"
  | "fluid___presentationWidth"
  | "fluid___presentationHeight"
  | "sizes___base64"
  | "sizes___tracedSVG"
  | "sizes___aspectRatio"
  | "sizes___src"
  | "sizes___srcSet"
  | "sizes___srcWebp"
  | "sizes___srcSetWebp"
  | "sizes___sizes"
  | "sizes___originalImg"
  | "sizes___originalName"
  | "sizes___presentationWidth"
  | "sizes___presentationHeight"
  | "original___width"
  | "original___height"
  | "original___src"
  | "resize___src"
  | "resize___tracedSVG"
  | "resize___width"
  | "resize___height"
  | "resize___aspectRatio"
  | "resize___originalName"
  | "id"
  | "parent___id"
  | "parent___parent___id"
  | "parent___parent___parent___id"
  | "parent___parent___parent___children"
  | "parent___parent___children"
  | "parent___parent___children___id"
  | "parent___parent___children___children"
  | "parent___parent___internal___content"
  | "parent___parent___internal___contentDigest"
  | "parent___parent___internal___description"
  | "parent___parent___internal___fieldOwners"
  | "parent___parent___internal___ignoreType"
  | "parent___parent___internal___mediaType"
  | "parent___parent___internal___owner"
  | "parent___parent___internal___type"
  | "parent___children"
  | "parent___children___id"
  | "parent___children___parent___id"
  | "parent___children___parent___children"
  | "parent___children___children"
  | "parent___children___children___id"
  | "parent___children___children___children"
  | "parent___children___internal___content"
  | "parent___children___internal___contentDigest"
  | "parent___children___internal___description"
  | "parent___children___internal___fieldOwners"
  | "parent___children___internal___ignoreType"
  | "parent___children___internal___mediaType"
  | "parent___children___internal___owner"
  | "parent___children___internal___type"
  | "parent___internal___content"
  | "parent___internal___contentDigest"
  | "parent___internal___description"
  | "parent___internal___fieldOwners"
  | "parent___internal___ignoreType"
  | "parent___internal___mediaType"
  | "parent___internal___owner"
  | "parent___internal___type"
  | "children"
  | "children___id"
  | "children___parent___id"
  | "children___parent___parent___id"
  | "children___parent___parent___children"
  | "children___parent___children"
  | "children___parent___children___id"
  | "children___parent___children___children"
  | "children___parent___internal___content"
  | "children___parent___internal___contentDigest"
  | "children___parent___internal___description"
  | "children___parent___internal___fieldOwners"
  | "children___parent___internal___ignoreType"
  | "children___parent___internal___mediaType"
  | "children___parent___internal___owner"
  | "children___parent___internal___type"
  | "children___children"
  | "children___children___id"
  | "children___children___parent___id"
  | "children___children___parent___children"
  | "children___children___children"
  | "children___children___children___id"
  | "children___children___children___children"
  | "children___children___internal___content"
  | "children___children___internal___contentDigest"
  | "children___children___internal___description"
  | "children___children___internal___fieldOwners"
  | "children___children___internal___ignoreType"
  | "children___children___internal___mediaType"
  | "children___children___internal___owner"
  | "children___children___internal___type"
  | "children___internal___content"
  | "children___internal___contentDigest"
  | "children___internal___description"
  | "children___internal___fieldOwners"
  | "children___internal___ignoreType"
  | "children___internal___mediaType"
  | "children___internal___owner"
  | "children___internal___type"
  | "internal___content"
  | "internal___contentDigest"
  | "internal___description"
  | "internal___fieldOwners"
  | "internal___ignoreType"
  | "internal___mediaType"
  | "internal___owner"
  | "internal___type"

type GQLImageSharpFilterInput = {
  fixed?: Maybe<GQLImageSharpFixedFilterInput>
  resolutions?: Maybe<GQLImageSharpResolutionsFilterInput>
  fluid?: Maybe<GQLImageSharpFluidFilterInput>
  sizes?: Maybe<GQLImageSharpSizesFilterInput>
  original?: Maybe<GQLImageSharpOriginalFilterInput>
  resize?: Maybe<GQLImageSharpResizeFilterInput>
  id?: Maybe<GQLStringQueryOperatorInput>
  parent?: Maybe<GQLNodeFilterInput>
  children?: Maybe<GQLNodeFilterListInput>
  internal?: Maybe<GQLInternalFilterInput>
}

type GQLImageSharpFixed = {
  base64?: Maybe<Scalars["String"]>
  tracedSVG?: Maybe<Scalars["String"]>
  aspectRatio?: Maybe<Scalars["Float"]>
  width: Scalars["Float"]
  height: Scalars["Float"]
  src: Scalars["String"]
  srcSet: Scalars["String"]
  srcWebp?: Maybe<Scalars["String"]>
  srcSetWebp?: Maybe<Scalars["String"]>
  originalName?: Maybe<Scalars["String"]>
}

type GQLImageSharpFixedFilterInput = {
  base64?: Maybe<GQLStringQueryOperatorInput>
  tracedSVG?: Maybe<GQLStringQueryOperatorInput>
  aspectRatio?: Maybe<GQLFloatQueryOperatorInput>
  width?: Maybe<GQLFloatQueryOperatorInput>
  height?: Maybe<GQLFloatQueryOperatorInput>
  src?: Maybe<GQLStringQueryOperatorInput>
  srcSet?: Maybe<GQLStringQueryOperatorInput>
  srcWebp?: Maybe<GQLStringQueryOperatorInput>
  srcSetWebp?: Maybe<GQLStringQueryOperatorInput>
  originalName?: Maybe<GQLStringQueryOperatorInput>
}

type GQLImageSharpFluid = {
  base64?: Maybe<Scalars["String"]>
  tracedSVG?: Maybe<Scalars["String"]>
  aspectRatio: Scalars["Float"]
  src: Scalars["String"]
  srcSet: Scalars["String"]
  srcWebp?: Maybe<Scalars["String"]>
  srcSetWebp?: Maybe<Scalars["String"]>
  sizes: Scalars["String"]
  originalImg?: Maybe<Scalars["String"]>
  originalName?: Maybe<Scalars["String"]>
  presentationWidth: Scalars["Int"]
  presentationHeight: Scalars["Int"]
}

type GQLImageSharpFluidFilterInput = {
  base64?: Maybe<GQLStringQueryOperatorInput>
  tracedSVG?: Maybe<GQLStringQueryOperatorInput>
  aspectRatio?: Maybe<GQLFloatQueryOperatorInput>
  src?: Maybe<GQLStringQueryOperatorInput>
  srcSet?: Maybe<GQLStringQueryOperatorInput>
  srcWebp?: Maybe<GQLStringQueryOperatorInput>
  srcSetWebp?: Maybe<GQLStringQueryOperatorInput>
  sizes?: Maybe<GQLStringQueryOperatorInput>
  originalImg?: Maybe<GQLStringQueryOperatorInput>
  originalName?: Maybe<GQLStringQueryOperatorInput>
  presentationWidth?: Maybe<GQLIntQueryOperatorInput>
  presentationHeight?: Maybe<GQLIntQueryOperatorInput>
}

type GQLImageSharpGroupConnection = {
  totalCount: Scalars["Int"]
  edges: Array<GQLImageSharpEdge>
  nodes: Array<GQLImageSharp>
  pageInfo: GQLPageInfo
  field: Scalars["String"]
  fieldValue?: Maybe<Scalars["String"]>
}

type GQLImageSharpOriginal = {
  width?: Maybe<Scalars["Float"]>
  height?: Maybe<Scalars["Float"]>
  src?: Maybe<Scalars["String"]>
}

type GQLImageSharpOriginalFilterInput = {
  width?: Maybe<GQLFloatQueryOperatorInput>
  height?: Maybe<GQLFloatQueryOperatorInput>
  src?: Maybe<GQLStringQueryOperatorInput>
}

type GQLImageSharpResize = {
  src?: Maybe<Scalars["String"]>
  tracedSVG?: Maybe<Scalars["String"]>
  width?: Maybe<Scalars["Int"]>
  height?: Maybe<Scalars["Int"]>
  aspectRatio?: Maybe<Scalars["Float"]>
  originalName?: Maybe<Scalars["String"]>
}

type GQLImageSharpResizeFilterInput = {
  src?: Maybe<GQLStringQueryOperatorInput>
  tracedSVG?: Maybe<GQLStringQueryOperatorInput>
  width?: Maybe<GQLIntQueryOperatorInput>
  height?: Maybe<GQLIntQueryOperatorInput>
  aspectRatio?: Maybe<GQLFloatQueryOperatorInput>
  originalName?: Maybe<GQLStringQueryOperatorInput>
}

type GQLImageSharpResolutions = {
  base64?: Maybe<Scalars["String"]>
  tracedSVG?: Maybe<Scalars["String"]>
  aspectRatio?: Maybe<Scalars["Float"]>
  width: Scalars["Float"]
  height: Scalars["Float"]
  src: Scalars["String"]
  srcSet: Scalars["String"]
  srcWebp?: Maybe<Scalars["String"]>
  srcSetWebp?: Maybe<Scalars["String"]>
  originalName?: Maybe<Scalars["String"]>
}

type GQLImageSharpResolutionsFilterInput = {
  base64?: Maybe<GQLStringQueryOperatorInput>
  tracedSVG?: Maybe<GQLStringQueryOperatorInput>
  aspectRatio?: Maybe<GQLFloatQueryOperatorInput>
  width?: Maybe<GQLFloatQueryOperatorInput>
  height?: Maybe<GQLFloatQueryOperatorInput>
  src?: Maybe<GQLStringQueryOperatorInput>
  srcSet?: Maybe<GQLStringQueryOperatorInput>
  srcWebp?: Maybe<GQLStringQueryOperatorInput>
  srcSetWebp?: Maybe<GQLStringQueryOperatorInput>
  originalName?: Maybe<GQLStringQueryOperatorInput>
}

type GQLImageSharpSizes = {
  base64?: Maybe<Scalars["String"]>
  tracedSVG?: Maybe<Scalars["String"]>
  aspectRatio: Scalars["Float"]
  src: Scalars["String"]
  srcSet: Scalars["String"]
  srcWebp?: Maybe<Scalars["String"]>
  srcSetWebp?: Maybe<Scalars["String"]>
  sizes: Scalars["String"]
  originalImg?: Maybe<Scalars["String"]>
  originalName?: Maybe<Scalars["String"]>
  presentationWidth: Scalars["Int"]
  presentationHeight: Scalars["Int"]
}

type GQLImageSharpSizesFilterInput = {
  base64?: Maybe<GQLStringQueryOperatorInput>
  tracedSVG?: Maybe<GQLStringQueryOperatorInput>
  aspectRatio?: Maybe<GQLFloatQueryOperatorInput>
  src?: Maybe<GQLStringQueryOperatorInput>
  srcSet?: Maybe<GQLStringQueryOperatorInput>
  srcWebp?: Maybe<GQLStringQueryOperatorInput>
  srcSetWebp?: Maybe<GQLStringQueryOperatorInput>
  sizes?: Maybe<GQLStringQueryOperatorInput>
  originalImg?: Maybe<GQLStringQueryOperatorInput>
  originalName?: Maybe<GQLStringQueryOperatorInput>
  presentationWidth?: Maybe<GQLIntQueryOperatorInput>
  presentationHeight?: Maybe<GQLIntQueryOperatorInput>
}

type GQLImageSharpSortInput = {
  fields?: Maybe<Array<Maybe<GQLImageSharpFieldsEnum>>>
  order?: Maybe<Array<Maybe<GQLSortOrderEnum>>>
}

type GQLInternal = {
  content?: Maybe<Scalars["String"]>
  contentDigest: Scalars["String"]
  description?: Maybe<Scalars["String"]>
  fieldOwners?: Maybe<Array<Maybe<Scalars["String"]>>>
  ignoreType?: Maybe<Scalars["Boolean"]>
  mediaType?: Maybe<Scalars["String"]>
  owner: Scalars["String"]
  type: Scalars["String"]
}

type GQLInternalFilterInput = {
  content?: Maybe<GQLStringQueryOperatorInput>
  contentDigest?: Maybe<GQLStringQueryOperatorInput>
  description?: Maybe<GQLStringQueryOperatorInput>
  fieldOwners?: Maybe<GQLStringQueryOperatorInput>
  ignoreType?: Maybe<GQLBooleanQueryOperatorInput>
  mediaType?: Maybe<GQLStringQueryOperatorInput>
  owner?: Maybe<GQLStringQueryOperatorInput>
  type?: Maybe<GQLStringQueryOperatorInput>
}

type GQLIntQueryOperatorInput = {
  eq?: Maybe<Scalars["Int"]>
  ne?: Maybe<Scalars["Int"]>
  gt?: Maybe<Scalars["Int"]>
  gte?: Maybe<Scalars["Int"]>
  lt?: Maybe<Scalars["Int"]>
  lte?: Maybe<Scalars["Int"]>
  in?: Maybe<Array<Maybe<Scalars["Int"]>>>
  nin?: Maybe<Array<Maybe<Scalars["Int"]>>>
}

/** Node Interface */
type GQLNode = {
  id: Scalars["ID"]
  parent?: Maybe<GQLNode>
  children: Array<GQLNode>
  internal: GQLInternal
}

type GQLNodeFilterInput = {
  id?: Maybe<GQLStringQueryOperatorInput>
  parent?: Maybe<GQLNodeFilterInput>
  children?: Maybe<GQLNodeFilterListInput>
  internal?: Maybe<GQLInternalFilterInput>
}

type GQLNodeFilterListInput = {
  elemMatch?: Maybe<GQLNodeFilterInput>
}

type GQLPageInfo = {
  currentPage: Scalars["Int"]
  hasPreviousPage: Scalars["Boolean"]
  hasNextPage: Scalars["Boolean"]
  itemCount: Scalars["Int"]
  pageCount: Scalars["Int"]
  perPage?: Maybe<Scalars["Int"]>
  totalCount: Scalars["Int"]
}

type GQLPotrace = {
  turnPolicy?: Maybe<GQLPotraceTurnPolicy>
  turdSize?: Maybe<Scalars["Float"]>
  alphaMax?: Maybe<Scalars["Float"]>
  optCurve?: Maybe<Scalars["Boolean"]>
  optTolerance?: Maybe<Scalars["Float"]>
  threshold?: Maybe<Scalars["Int"]>
  blackOnWhite?: Maybe<Scalars["Boolean"]>
  color?: Maybe<Scalars["String"]>
  background?: Maybe<Scalars["String"]>
}

type GQLPotraceTurnPolicy =
  | "TURNPOLICY_BLACK"
  | "TURNPOLICY_WHITE"
  | "TURNPOLICY_LEFT"
  | "TURNPOLICY_RIGHT"
  | "TURNPOLICY_MINORITY"
  | "TURNPOLICY_MAJORITY"

type GQLQuery = {
  file?: Maybe<GQLFile>
  allFile: GQLFileConnection
  directory?: Maybe<GQLDirectory>
  allDirectory: GQLDirectoryConnection
  site?: Maybe<GQLSite>
  allSite: GQLSiteConnection
  sitePage?: Maybe<GQLSitePage>
  allSitePage: GQLSitePageConnection
  imageSharp?: Maybe<GQLImageSharp>
  allImageSharp: GQLImageSharpConnection
  siteBuildMetadata?: Maybe<GQLSiteBuildMetadata>
  allSiteBuildMetadata: GQLSiteBuildMetadataConnection
  sitePlugin?: Maybe<GQLSitePlugin>
  allSitePlugin: GQLSitePluginConnection
}

type GQLQueryFileArgs = {
  sourceInstanceName?: Maybe<GQLStringQueryOperatorInput>
  absolutePath?: Maybe<GQLStringQueryOperatorInput>
  relativePath?: Maybe<GQLStringQueryOperatorInput>
  extension?: Maybe<GQLStringQueryOperatorInput>
  size?: Maybe<GQLIntQueryOperatorInput>
  prettySize?: Maybe<GQLStringQueryOperatorInput>
  modifiedTime?: Maybe<GQLDateQueryOperatorInput>
  accessTime?: Maybe<GQLDateQueryOperatorInput>
  changeTime?: Maybe<GQLDateQueryOperatorInput>
  birthTime?: Maybe<GQLDateQueryOperatorInput>
  root?: Maybe<GQLStringQueryOperatorInput>
  dir?: Maybe<GQLStringQueryOperatorInput>
  base?: Maybe<GQLStringQueryOperatorInput>
  ext?: Maybe<GQLStringQueryOperatorInput>
  name?: Maybe<GQLStringQueryOperatorInput>
  relativeDirectory?: Maybe<GQLStringQueryOperatorInput>
  dev?: Maybe<GQLIntQueryOperatorInput>
  mode?: Maybe<GQLIntQueryOperatorInput>
  nlink?: Maybe<GQLIntQueryOperatorInput>
  uid?: Maybe<GQLIntQueryOperatorInput>
  gid?: Maybe<GQLIntQueryOperatorInput>
  rdev?: Maybe<GQLIntQueryOperatorInput>
  ino?: Maybe<GQLFloatQueryOperatorInput>
  atimeMs?: Maybe<GQLFloatQueryOperatorInput>
  mtimeMs?: Maybe<GQLFloatQueryOperatorInput>
  ctimeMs?: Maybe<GQLFloatQueryOperatorInput>
  atime?: Maybe<GQLDateQueryOperatorInput>
  mtime?: Maybe<GQLDateQueryOperatorInput>
  ctime?: Maybe<GQLDateQueryOperatorInput>
  birthtime?: Maybe<GQLDateQueryOperatorInput>
  birthtimeMs?: Maybe<GQLFloatQueryOperatorInput>
  blksize?: Maybe<GQLIntQueryOperatorInput>
  blocks?: Maybe<GQLIntQueryOperatorInput>
  publicURL?: Maybe<GQLStringQueryOperatorInput>
  childImageSharp?: Maybe<GQLImageSharpFilterInput>
  id?: Maybe<GQLStringQueryOperatorInput>
  parent?: Maybe<GQLNodeFilterInput>
  children?: Maybe<GQLNodeFilterListInput>
  internal?: Maybe<GQLInternalFilterInput>
}

type GQLQueryAllFileArgs = {
  filter?: Maybe<GQLFileFilterInput>
  sort?: Maybe<GQLFileSortInput>
  skip?: Maybe<Scalars["Int"]>
  limit?: Maybe<Scalars["Int"]>
}

type GQLQueryDirectoryArgs = {
  sourceInstanceName?: Maybe<GQLStringQueryOperatorInput>
  absolutePath?: Maybe<GQLStringQueryOperatorInput>
  relativePath?: Maybe<GQLStringQueryOperatorInput>
  extension?: Maybe<GQLStringQueryOperatorInput>
  size?: Maybe<GQLIntQueryOperatorInput>
  prettySize?: Maybe<GQLStringQueryOperatorInput>
  modifiedTime?: Maybe<GQLDateQueryOperatorInput>
  accessTime?: Maybe<GQLDateQueryOperatorInput>
  changeTime?: Maybe<GQLDateQueryOperatorInput>
  birthTime?: Maybe<GQLDateQueryOperatorInput>
  root?: Maybe<GQLStringQueryOperatorInput>
  dir?: Maybe<GQLStringQueryOperatorInput>
  base?: Maybe<GQLStringQueryOperatorInput>
  ext?: Maybe<GQLStringQueryOperatorInput>
  name?: Maybe<GQLStringQueryOperatorInput>
  relativeDirectory?: Maybe<GQLStringQueryOperatorInput>
  dev?: Maybe<GQLIntQueryOperatorInput>
  mode?: Maybe<GQLIntQueryOperatorInput>
  nlink?: Maybe<GQLIntQueryOperatorInput>
  uid?: Maybe<GQLIntQueryOperatorInput>
  gid?: Maybe<GQLIntQueryOperatorInput>
  rdev?: Maybe<GQLIntQueryOperatorInput>
  ino?: Maybe<GQLFloatQueryOperatorInput>
  atimeMs?: Maybe<GQLFloatQueryOperatorInput>
  mtimeMs?: Maybe<GQLFloatQueryOperatorInput>
  ctimeMs?: Maybe<GQLFloatQueryOperatorInput>
  atime?: Maybe<GQLDateQueryOperatorInput>
  mtime?: Maybe<GQLDateQueryOperatorInput>
  ctime?: Maybe<GQLDateQueryOperatorInput>
  birthtime?: Maybe<GQLDateQueryOperatorInput>
  birthtimeMs?: Maybe<GQLFloatQueryOperatorInput>
  blksize?: Maybe<GQLIntQueryOperatorInput>
  blocks?: Maybe<GQLIntQueryOperatorInput>
  id?: Maybe<GQLStringQueryOperatorInput>
  parent?: Maybe<GQLNodeFilterInput>
  children?: Maybe<GQLNodeFilterListInput>
  internal?: Maybe<GQLInternalFilterInput>
}

type GQLQueryAllDirectoryArgs = {
  filter?: Maybe<GQLDirectoryFilterInput>
  sort?: Maybe<GQLDirectorySortInput>
  skip?: Maybe<Scalars["Int"]>
  limit?: Maybe<Scalars["Int"]>
}

type GQLQuerySiteArgs = {
  buildTime?: Maybe<GQLDateQueryOperatorInput>
  siteMetadata?: Maybe<GQLSiteSiteMetadataFilterInput>
  port?: Maybe<GQLIntQueryOperatorInput>
  host?: Maybe<GQLStringQueryOperatorInput>
  polyfill?: Maybe<GQLBooleanQueryOperatorInput>
  pathPrefix?: Maybe<GQLStringQueryOperatorInput>
  id?: Maybe<GQLStringQueryOperatorInput>
  parent?: Maybe<GQLNodeFilterInput>
  children?: Maybe<GQLNodeFilterListInput>
  internal?: Maybe<GQLInternalFilterInput>
}

type GQLQueryAllSiteArgs = {
  filter?: Maybe<GQLSiteFilterInput>
  sort?: Maybe<GQLSiteSortInput>
  skip?: Maybe<Scalars["Int"]>
  limit?: Maybe<Scalars["Int"]>
}

type GQLQuerySitePageArgs = {
  path?: Maybe<GQLStringQueryOperatorInput>
  component?: Maybe<GQLStringQueryOperatorInput>
  internalComponentName?: Maybe<GQLStringQueryOperatorInput>
  componentChunkName?: Maybe<GQLStringQueryOperatorInput>
  matchPath?: Maybe<GQLStringQueryOperatorInput>
  id?: Maybe<GQLStringQueryOperatorInput>
  parent?: Maybe<GQLNodeFilterInput>
  children?: Maybe<GQLNodeFilterListInput>
  internal?: Maybe<GQLInternalFilterInput>
  isCreatedByStatefulCreatePages?: Maybe<GQLBooleanQueryOperatorInput>
  pluginCreator?: Maybe<GQLSitePluginFilterInput>
  pluginCreatorId?: Maybe<GQLStringQueryOperatorInput>
  componentPath?: Maybe<GQLStringQueryOperatorInput>
}

type GQLQueryAllSitePageArgs = {
  filter?: Maybe<GQLSitePageFilterInput>
  sort?: Maybe<GQLSitePageSortInput>
  skip?: Maybe<Scalars["Int"]>
  limit?: Maybe<Scalars["Int"]>
}

type GQLQueryImageSharpArgs = {
  fixed?: Maybe<GQLImageSharpFixedFilterInput>
  resolutions?: Maybe<GQLImageSharpResolutionsFilterInput>
  fluid?: Maybe<GQLImageSharpFluidFilterInput>
  sizes?: Maybe<GQLImageSharpSizesFilterInput>
  original?: Maybe<GQLImageSharpOriginalFilterInput>
  resize?: Maybe<GQLImageSharpResizeFilterInput>
  id?: Maybe<GQLStringQueryOperatorInput>
  parent?: Maybe<GQLNodeFilterInput>
  children?: Maybe<GQLNodeFilterListInput>
  internal?: Maybe<GQLInternalFilterInput>
}

type GQLQueryAllImageSharpArgs = {
  filter?: Maybe<GQLImageSharpFilterInput>
  sort?: Maybe<GQLImageSharpSortInput>
  skip?: Maybe<Scalars["Int"]>
  limit?: Maybe<Scalars["Int"]>
}

type GQLQuerySiteBuildMetadataArgs = {
  id?: Maybe<GQLStringQueryOperatorInput>
  parent?: Maybe<GQLNodeFilterInput>
  children?: Maybe<GQLNodeFilterListInput>
  internal?: Maybe<GQLInternalFilterInput>
  buildTime?: Maybe<GQLDateQueryOperatorInput>
}

type GQLQueryAllSiteBuildMetadataArgs = {
  filter?: Maybe<GQLSiteBuildMetadataFilterInput>
  sort?: Maybe<GQLSiteBuildMetadataSortInput>
  skip?: Maybe<Scalars["Int"]>
  limit?: Maybe<Scalars["Int"]>
}

type GQLQuerySitePluginArgs = {
  id?: Maybe<GQLStringQueryOperatorInput>
  parent?: Maybe<GQLNodeFilterInput>
  children?: Maybe<GQLNodeFilterListInput>
  internal?: Maybe<GQLInternalFilterInput>
  resolve?: Maybe<GQLStringQueryOperatorInput>
  name?: Maybe<GQLStringQueryOperatorInput>
  version?: Maybe<GQLStringQueryOperatorInput>
  pluginOptions?: Maybe<GQLSitePluginPluginOptionsFilterInput>
  nodeAPIs?: Maybe<GQLStringQueryOperatorInput>
  browserAPIs?: Maybe<GQLStringQueryOperatorInput>
  ssrAPIs?: Maybe<GQLStringQueryOperatorInput>
  pluginFilepath?: Maybe<GQLStringQueryOperatorInput>
  packageJson?: Maybe<GQLSitePluginPackageJsonFilterInput>
}

type GQLQueryAllSitePluginArgs = {
  filter?: Maybe<GQLSitePluginFilterInput>
  sort?: Maybe<GQLSitePluginSortInput>
  skip?: Maybe<Scalars["Int"]>
  limit?: Maybe<Scalars["Int"]>
}

type GQLSite = GQLNode & {
  buildTime?: Maybe<Scalars["Date"]>
  siteMetadata?: Maybe<GQLSiteSiteMetadata>
  port?: Maybe<Scalars["Int"]>
  host?: Maybe<Scalars["String"]>
  polyfill?: Maybe<Scalars["Boolean"]>
  pathPrefix?: Maybe<Scalars["String"]>
  id: Scalars["ID"]
  parent?: Maybe<GQLNode>
  children: Array<GQLNode>
  internal: GQLInternal
}

type GQLSiteBuildTimeArgs = {
  formatString?: Maybe<Scalars["String"]>
  fromNow?: Maybe<Scalars["Boolean"]>
  difference?: Maybe<Scalars["String"]>
  locale?: Maybe<Scalars["String"]>
}

type GQLSiteBuildMetadata = GQLNode & {
  id: Scalars["ID"]
  parent?: Maybe<GQLNode>
  children: Array<GQLNode>
  internal: GQLInternal
  buildTime?: Maybe<Scalars["Date"]>
}

type GQLSiteBuildMetadataBuildTimeArgs = {
  formatString?: Maybe<Scalars["String"]>
  fromNow?: Maybe<Scalars["Boolean"]>
  difference?: Maybe<Scalars["String"]>
  locale?: Maybe<Scalars["String"]>
}

type GQLSiteBuildMetadataConnection = {
  totalCount: Scalars["Int"]
  edges: Array<GQLSiteBuildMetadataEdge>
  nodes: Array<GQLSiteBuildMetadata>
  pageInfo: GQLPageInfo
  distinct: Array<Scalars["String"]>
  group: Array<GQLSiteBuildMetadataGroupConnection>
}

type GQLSiteBuildMetadataConnectionDistinctArgs = {
  field: GQLSiteBuildMetadataFieldsEnum
}

type GQLSiteBuildMetadataConnectionGroupArgs = {
  skip?: Maybe<Scalars["Int"]>
  limit?: Maybe<Scalars["Int"]>
  field: GQLSiteBuildMetadataFieldsEnum
}

type GQLSiteBuildMetadataEdge = {
  next?: Maybe<GQLSiteBuildMetadata>
  node: GQLSiteBuildMetadata
  previous?: Maybe<GQLSiteBuildMetadata>
}

type GQLSiteBuildMetadataFieldsEnum =
  | "id"
  | "parent___id"
  | "parent___parent___id"
  | "parent___parent___parent___id"
  | "parent___parent___parent___children"
  | "parent___parent___children"
  | "parent___parent___children___id"
  | "parent___parent___children___children"
  | "parent___parent___internal___content"
  | "parent___parent___internal___contentDigest"
  | "parent___parent___internal___description"
  | "parent___parent___internal___fieldOwners"
  | "parent___parent___internal___ignoreType"
  | "parent___parent___internal___mediaType"
  | "parent___parent___internal___owner"
  | "parent___parent___internal___type"
  | "parent___children"
  | "parent___children___id"
  | "parent___children___parent___id"
  | "parent___children___parent___children"
  | "parent___children___children"
  | "parent___children___children___id"
  | "parent___children___children___children"
  | "parent___children___internal___content"
  | "parent___children___internal___contentDigest"
  | "parent___children___internal___description"
  | "parent___children___internal___fieldOwners"
  | "parent___children___internal___ignoreType"
  | "parent___children___internal___mediaType"
  | "parent___children___internal___owner"
  | "parent___children___internal___type"
  | "parent___internal___content"
  | "parent___internal___contentDigest"
  | "parent___internal___description"
  | "parent___internal___fieldOwners"
  | "parent___internal___ignoreType"
  | "parent___internal___mediaType"
  | "parent___internal___owner"
  | "parent___internal___type"
  | "children"
  | "children___id"
  | "children___parent___id"
  | "children___parent___parent___id"
  | "children___parent___parent___children"
  | "children___parent___children"
  | "children___parent___children___id"
  | "children___parent___children___children"
  | "children___parent___internal___content"
  | "children___parent___internal___contentDigest"
  | "children___parent___internal___description"
  | "children___parent___internal___fieldOwners"
  | "children___parent___internal___ignoreType"
  | "children___parent___internal___mediaType"
  | "children___parent___internal___owner"
  | "children___parent___internal___type"
  | "children___children"
  | "children___children___id"
  | "children___children___parent___id"
  | "children___children___parent___children"
  | "children___children___children"
  | "children___children___children___id"
  | "children___children___children___children"
  | "children___children___internal___content"
  | "children___children___internal___contentDigest"
  | "children___children___internal___description"
  | "children___children___internal___fieldOwners"
  | "children___children___internal___ignoreType"
  | "children___children___internal___mediaType"
  | "children___children___internal___owner"
  | "children___children___internal___type"
  | "children___internal___content"
  | "children___internal___contentDigest"
  | "children___internal___description"
  | "children___internal___fieldOwners"
  | "children___internal___ignoreType"
  | "children___internal___mediaType"
  | "children___internal___owner"
  | "children___internal___type"
  | "internal___content"
  | "internal___contentDigest"
  | "internal___description"
  | "internal___fieldOwners"
  | "internal___ignoreType"
  | "internal___mediaType"
  | "internal___owner"
  | "internal___type"
  | "buildTime"

type GQLSiteBuildMetadataFilterInput = {
  id?: Maybe<GQLStringQueryOperatorInput>
  parent?: Maybe<GQLNodeFilterInput>
  children?: Maybe<GQLNodeFilterListInput>
  internal?: Maybe<GQLInternalFilterInput>
  buildTime?: Maybe<GQLDateQueryOperatorInput>
}

type GQLSiteBuildMetadataGroupConnection = {
  totalCount: Scalars["Int"]
  edges: Array<GQLSiteBuildMetadataEdge>
  nodes: Array<GQLSiteBuildMetadata>
  pageInfo: GQLPageInfo
  field: Scalars["String"]
  fieldValue?: Maybe<Scalars["String"]>
}

type GQLSiteBuildMetadataSortInput = {
  fields?: Maybe<Array<Maybe<GQLSiteBuildMetadataFieldsEnum>>>
  order?: Maybe<Array<Maybe<GQLSortOrderEnum>>>
}

type GQLSiteConnection = {
  totalCount: Scalars["Int"]
  edges: Array<GQLSiteEdge>
  nodes: Array<GQLSite>
  pageInfo: GQLPageInfo
  distinct: Array<Scalars["String"]>
  group: Array<GQLSiteGroupConnection>
}

type GQLSiteConnectionDistinctArgs = {
  field: GQLSiteFieldsEnum
}

type GQLSiteConnectionGroupArgs = {
  skip?: Maybe<Scalars["Int"]>
  limit?: Maybe<Scalars["Int"]>
  field: GQLSiteFieldsEnum
}

type GQLSiteEdge = {
  next?: Maybe<GQLSite>
  node: GQLSite
  previous?: Maybe<GQLSite>
}

type GQLSiteFieldsEnum =
  | "buildTime"
  | "siteMetadata___title"
  | "siteMetadata___description"
  | "siteMetadata___siteUrl"
  | "port"
  | "host"
  | "polyfill"
  | "pathPrefix"
  | "id"
  | "parent___id"
  | "parent___parent___id"
  | "parent___parent___parent___id"
  | "parent___parent___parent___children"
  | "parent___parent___children"
  | "parent___parent___children___id"
  | "parent___parent___children___children"
  | "parent___parent___internal___content"
  | "parent___parent___internal___contentDigest"
  | "parent___parent___internal___description"
  | "parent___parent___internal___fieldOwners"
  | "parent___parent___internal___ignoreType"
  | "parent___parent___internal___mediaType"
  | "parent___parent___internal___owner"
  | "parent___parent___internal___type"
  | "parent___children"
  | "parent___children___id"
  | "parent___children___parent___id"
  | "parent___children___parent___children"
  | "parent___children___children"
  | "parent___children___children___id"
  | "parent___children___children___children"
  | "parent___children___internal___content"
  | "parent___children___internal___contentDigest"
  | "parent___children___internal___description"
  | "parent___children___internal___fieldOwners"
  | "parent___children___internal___ignoreType"
  | "parent___children___internal___mediaType"
  | "parent___children___internal___owner"
  | "parent___children___internal___type"
  | "parent___internal___content"
  | "parent___internal___contentDigest"
  | "parent___internal___description"
  | "parent___internal___fieldOwners"
  | "parent___internal___ignoreType"
  | "parent___internal___mediaType"
  | "parent___internal___owner"
  | "parent___internal___type"
  | "children"
  | "children___id"
  | "children___parent___id"
  | "children___parent___parent___id"
  | "children___parent___parent___children"
  | "children___parent___children"
  | "children___parent___children___id"
  | "children___parent___children___children"
  | "children___parent___internal___content"
  | "children___parent___internal___contentDigest"
  | "children___parent___internal___description"
  | "children___parent___internal___fieldOwners"
  | "children___parent___internal___ignoreType"
  | "children___parent___internal___mediaType"
  | "children___parent___internal___owner"
  | "children___parent___internal___type"
  | "children___children"
  | "children___children___id"
  | "children___children___parent___id"
  | "children___children___parent___children"
  | "children___children___children"
  | "children___children___children___id"
  | "children___children___children___children"
  | "children___children___internal___content"
  | "children___children___internal___contentDigest"
  | "children___children___internal___description"
  | "children___children___internal___fieldOwners"
  | "children___children___internal___ignoreType"
  | "children___children___internal___mediaType"
  | "children___children___internal___owner"
  | "children___children___internal___type"
  | "children___internal___content"
  | "children___internal___contentDigest"
  | "children___internal___description"
  | "children___internal___fieldOwners"
  | "children___internal___ignoreType"
  | "children___internal___mediaType"
  | "children___internal___owner"
  | "children___internal___type"
  | "internal___content"
  | "internal___contentDigest"
  | "internal___description"
  | "internal___fieldOwners"
  | "internal___ignoreType"
  | "internal___mediaType"
  | "internal___owner"
  | "internal___type"

type GQLSiteFilterInput = {
  buildTime?: Maybe<GQLDateQueryOperatorInput>
  siteMetadata?: Maybe<GQLSiteSiteMetadataFilterInput>
  port?: Maybe<GQLIntQueryOperatorInput>
  host?: Maybe<GQLStringQueryOperatorInput>
  polyfill?: Maybe<GQLBooleanQueryOperatorInput>
  pathPrefix?: Maybe<GQLStringQueryOperatorInput>
  id?: Maybe<GQLStringQueryOperatorInput>
  parent?: Maybe<GQLNodeFilterInput>
  children?: Maybe<GQLNodeFilterListInput>
  internal?: Maybe<GQLInternalFilterInput>
}

type GQLSiteGroupConnection = {
  totalCount: Scalars["Int"]
  edges: Array<GQLSiteEdge>
  nodes: Array<GQLSite>
  pageInfo: GQLPageInfo
  field: Scalars["String"]
  fieldValue?: Maybe<Scalars["String"]>
}

type GQLSitePage = GQLNode & {
  path: Scalars["String"]
  component: Scalars["String"]
  internalComponentName: Scalars["String"]
  componentChunkName: Scalars["String"]
  matchPath?: Maybe<Scalars["String"]>
  id: Scalars["ID"]
  parent?: Maybe<GQLNode>
  children: Array<GQLNode>
  internal: GQLInternal
  isCreatedByStatefulCreatePages?: Maybe<Scalars["Boolean"]>
  pluginCreator?: Maybe<GQLSitePlugin>
  pluginCreatorId?: Maybe<Scalars["String"]>
  componentPath?: Maybe<Scalars["String"]>
}

type GQLSitePageConnection = {
  totalCount: Scalars["Int"]
  edges: Array<GQLSitePageEdge>
  nodes: Array<GQLSitePage>
  pageInfo: GQLPageInfo
  distinct: Array<Scalars["String"]>
  group: Array<GQLSitePageGroupConnection>
}

type GQLSitePageConnectionDistinctArgs = {
  field: GQLSitePageFieldsEnum
}

type GQLSitePageConnectionGroupArgs = {
  skip?: Maybe<Scalars["Int"]>
  limit?: Maybe<Scalars["Int"]>
  field: GQLSitePageFieldsEnum
}

type GQLSitePageEdge = {
  next?: Maybe<GQLSitePage>
  node: GQLSitePage
  previous?: Maybe<GQLSitePage>
}

type GQLSitePageFieldsEnum =
  | "path"
  | "component"
  | "internalComponentName"
  | "componentChunkName"
  | "matchPath"
  | "id"
  | "parent___id"
  | "parent___parent___id"
  | "parent___parent___parent___id"
  | "parent___parent___parent___children"
  | "parent___parent___children"
  | "parent___parent___children___id"
  | "parent___parent___children___children"
  | "parent___parent___internal___content"
  | "parent___parent___internal___contentDigest"
  | "parent___parent___internal___description"
  | "parent___parent___internal___fieldOwners"
  | "parent___parent___internal___ignoreType"
  | "parent___parent___internal___mediaType"
  | "parent___parent___internal___owner"
  | "parent___parent___internal___type"
  | "parent___children"
  | "parent___children___id"
  | "parent___children___parent___id"
  | "parent___children___parent___children"
  | "parent___children___children"
  | "parent___children___children___id"
  | "parent___children___children___children"
  | "parent___children___internal___content"
  | "parent___children___internal___contentDigest"
  | "parent___children___internal___description"
  | "parent___children___internal___fieldOwners"
  | "parent___children___internal___ignoreType"
  | "parent___children___internal___mediaType"
  | "parent___children___internal___owner"
  | "parent___children___internal___type"
  | "parent___internal___content"
  | "parent___internal___contentDigest"
  | "parent___internal___description"
  | "parent___internal___fieldOwners"
  | "parent___internal___ignoreType"
  | "parent___internal___mediaType"
  | "parent___internal___owner"
  | "parent___internal___type"
  | "children"
  | "children___id"
  | "children___parent___id"
  | "children___parent___parent___id"
  | "children___parent___parent___children"
  | "children___parent___children"
  | "children___parent___children___id"
  | "children___parent___children___children"
  | "children___parent___internal___content"
  | "children___parent___internal___contentDigest"
  | "children___parent___internal___description"
  | "children___parent___internal___fieldOwners"
  | "children___parent___internal___ignoreType"
  | "children___parent___internal___mediaType"
  | "children___parent___internal___owner"
  | "children___parent___internal___type"
  | "children___children"
  | "children___children___id"
  | "children___children___parent___id"
  | "children___children___parent___children"
  | "children___children___children"
  | "children___children___children___id"
  | "children___children___children___children"
  | "children___children___internal___content"
  | "children___children___internal___contentDigest"
  | "children___children___internal___description"
  | "children___children___internal___fieldOwners"
  | "children___children___internal___ignoreType"
  | "children___children___internal___mediaType"
  | "children___children___internal___owner"
  | "children___children___internal___type"
  | "children___internal___content"
  | "children___internal___contentDigest"
  | "children___internal___description"
  | "children___internal___fieldOwners"
  | "children___internal___ignoreType"
  | "children___internal___mediaType"
  | "children___internal___owner"
  | "children___internal___type"
  | "internal___content"
  | "internal___contentDigest"
  | "internal___description"
  | "internal___fieldOwners"
  | "internal___ignoreType"
  | "internal___mediaType"
  | "internal___owner"
  | "internal___type"
  | "isCreatedByStatefulCreatePages"
  | "pluginCreator___id"
  | "pluginCreator___parent___id"
  | "pluginCreator___parent___parent___id"
  | "pluginCreator___parent___parent___children"
  | "pluginCreator___parent___children"
  | "pluginCreator___parent___children___id"
  | "pluginCreator___parent___children___children"
  | "pluginCreator___parent___internal___content"
  | "pluginCreator___parent___internal___contentDigest"
  | "pluginCreator___parent___internal___description"
  | "pluginCreator___parent___internal___fieldOwners"
  | "pluginCreator___parent___internal___ignoreType"
  | "pluginCreator___parent___internal___mediaType"
  | "pluginCreator___parent___internal___owner"
  | "pluginCreator___parent___internal___type"
  | "pluginCreator___children"
  | "pluginCreator___children___id"
  | "pluginCreator___children___parent___id"
  | "pluginCreator___children___parent___children"
  | "pluginCreator___children___children"
  | "pluginCreator___children___children___id"
  | "pluginCreator___children___children___children"
  | "pluginCreator___children___internal___content"
  | "pluginCreator___children___internal___contentDigest"
  | "pluginCreator___children___internal___description"
  | "pluginCreator___children___internal___fieldOwners"
  | "pluginCreator___children___internal___ignoreType"
  | "pluginCreator___children___internal___mediaType"
  | "pluginCreator___children___internal___owner"
  | "pluginCreator___children___internal___type"
  | "pluginCreator___internal___content"
  | "pluginCreator___internal___contentDigest"
  | "pluginCreator___internal___description"
  | "pluginCreator___internal___fieldOwners"
  | "pluginCreator___internal___ignoreType"
  | "pluginCreator___internal___mediaType"
  | "pluginCreator___internal___owner"
  | "pluginCreator___internal___type"
  | "pluginCreator___resolve"
  | "pluginCreator___name"
  | "pluginCreator___version"
  | "pluginCreator___pluginOptions___includePaths"
  | "pluginCreator___pluginOptions___cssLoaderOptions___localsConvention"
  | "pluginCreator___pluginOptions___cssLoaderOptions___camelCase"
  | "pluginCreator___pluginOptions___name"
  | "pluginCreator___pluginOptions___path"
  | "pluginCreator___pluginOptions___pathCheck"
  | "pluginCreator___nodeAPIs"
  | "pluginCreator___browserAPIs"
  | "pluginCreator___ssrAPIs"
  | "pluginCreator___pluginFilepath"
  | "pluginCreator___packageJson___name"
  | "pluginCreator___packageJson___description"
  | "pluginCreator___packageJson___version"
  | "pluginCreator___packageJson___main"
  | "pluginCreator___packageJson___license"
  | "pluginCreator___packageJson___dependencies"
  | "pluginCreator___packageJson___dependencies___name"
  | "pluginCreator___packageJson___dependencies___version"
  | "pluginCreator___packageJson___devDependencies"
  | "pluginCreator___packageJson___devDependencies___name"
  | "pluginCreator___packageJson___devDependencies___version"
  | "pluginCreator___packageJson___peerDependencies"
  | "pluginCreator___packageJson___peerDependencies___name"
  | "pluginCreator___packageJson___peerDependencies___version"
  | "pluginCreator___packageJson___keywords"
  | "pluginCreatorId"
  | "componentPath"

type GQLSitePageFilterInput = {
  path?: Maybe<GQLStringQueryOperatorInput>
  component?: Maybe<GQLStringQueryOperatorInput>
  internalComponentName?: Maybe<GQLStringQueryOperatorInput>
  componentChunkName?: Maybe<GQLStringQueryOperatorInput>
  matchPath?: Maybe<GQLStringQueryOperatorInput>
  id?: Maybe<GQLStringQueryOperatorInput>
  parent?: Maybe<GQLNodeFilterInput>
  children?: Maybe<GQLNodeFilterListInput>
  internal?: Maybe<GQLInternalFilterInput>
  isCreatedByStatefulCreatePages?: Maybe<GQLBooleanQueryOperatorInput>
  pluginCreator?: Maybe<GQLSitePluginFilterInput>
  pluginCreatorId?: Maybe<GQLStringQueryOperatorInput>
  componentPath?: Maybe<GQLStringQueryOperatorInput>
}

type GQLSitePageGroupConnection = {
  totalCount: Scalars["Int"]
  edges: Array<GQLSitePageEdge>
  nodes: Array<GQLSitePage>
  pageInfo: GQLPageInfo
  field: Scalars["String"]
  fieldValue?: Maybe<Scalars["String"]>
}

type GQLSitePageSortInput = {
  fields?: Maybe<Array<Maybe<GQLSitePageFieldsEnum>>>
  order?: Maybe<Array<Maybe<GQLSortOrderEnum>>>
}

type GQLSitePlugin = GQLNode & {
  id: Scalars["ID"]
  parent?: Maybe<GQLNode>
  children: Array<GQLNode>
  internal: GQLInternal
  resolve?: Maybe<Scalars["String"]>
  name?: Maybe<Scalars["String"]>
  version?: Maybe<Scalars["String"]>
  pluginOptions?: Maybe<GQLSitePluginPluginOptions>
  nodeAPIs?: Maybe<Array<Maybe<Scalars["String"]>>>
  browserAPIs?: Maybe<Array<Maybe<Scalars["String"]>>>
  ssrAPIs?: Maybe<Array<Maybe<Scalars["String"]>>>
  pluginFilepath?: Maybe<Scalars["String"]>
  packageJson?: Maybe<GQLSitePluginPackageJson>
}

type GQLSitePluginConnection = {
  totalCount: Scalars["Int"]
  edges: Array<GQLSitePluginEdge>
  nodes: Array<GQLSitePlugin>
  pageInfo: GQLPageInfo
  distinct: Array<Scalars["String"]>
  group: Array<GQLSitePluginGroupConnection>
}

type GQLSitePluginConnectionDistinctArgs = {
  field: GQLSitePluginFieldsEnum
}

type GQLSitePluginConnectionGroupArgs = {
  skip?: Maybe<Scalars["Int"]>
  limit?: Maybe<Scalars["Int"]>
  field: GQLSitePluginFieldsEnum
}

type GQLSitePluginEdge = {
  next?: Maybe<GQLSitePlugin>
  node: GQLSitePlugin
  previous?: Maybe<GQLSitePlugin>
}

type GQLSitePluginFieldsEnum =
  | "id"
  | "parent___id"
  | "parent___parent___id"
  | "parent___parent___parent___id"
  | "parent___parent___parent___children"
  | "parent___parent___children"
  | "parent___parent___children___id"
  | "parent___parent___children___children"
  | "parent___parent___internal___content"
  | "parent___parent___internal___contentDigest"
  | "parent___parent___internal___description"
  | "parent___parent___internal___fieldOwners"
  | "parent___parent___internal___ignoreType"
  | "parent___parent___internal___mediaType"
  | "parent___parent___internal___owner"
  | "parent___parent___internal___type"
  | "parent___children"
  | "parent___children___id"
  | "parent___children___parent___id"
  | "parent___children___parent___children"
  | "parent___children___children"
  | "parent___children___children___id"
  | "parent___children___children___children"
  | "parent___children___internal___content"
  | "parent___children___internal___contentDigest"
  | "parent___children___internal___description"
  | "parent___children___internal___fieldOwners"
  | "parent___children___internal___ignoreType"
  | "parent___children___internal___mediaType"
  | "parent___children___internal___owner"
  | "parent___children___internal___type"
  | "parent___internal___content"
  | "parent___internal___contentDigest"
  | "parent___internal___description"
  | "parent___internal___fieldOwners"
  | "parent___internal___ignoreType"
  | "parent___internal___mediaType"
  | "parent___internal___owner"
  | "parent___internal___type"
  | "children"
  | "children___id"
  | "children___parent___id"
  | "children___parent___parent___id"
  | "children___parent___parent___children"
  | "children___parent___children"
  | "children___parent___children___id"
  | "children___parent___children___children"
  | "children___parent___internal___content"
  | "children___parent___internal___contentDigest"
  | "children___parent___internal___description"
  | "children___parent___internal___fieldOwners"
  | "children___parent___internal___ignoreType"
  | "children___parent___internal___mediaType"
  | "children___parent___internal___owner"
  | "children___parent___internal___type"
  | "children___children"
  | "children___children___id"
  | "children___children___parent___id"
  | "children___children___parent___children"
  | "children___children___children"
  | "children___children___children___id"
  | "children___children___children___children"
  | "children___children___internal___content"
  | "children___children___internal___contentDigest"
  | "children___children___internal___description"
  | "children___children___internal___fieldOwners"
  | "children___children___internal___ignoreType"
  | "children___children___internal___mediaType"
  | "children___children___internal___owner"
  | "children___children___internal___type"
  | "children___internal___content"
  | "children___internal___contentDigest"
  | "children___internal___description"
  | "children___internal___fieldOwners"
  | "children___internal___ignoreType"
  | "children___internal___mediaType"
  | "children___internal___owner"
  | "children___internal___type"
  | "internal___content"
  | "internal___contentDigest"
  | "internal___description"
  | "internal___fieldOwners"
  | "internal___ignoreType"
  | "internal___mediaType"
  | "internal___owner"
  | "internal___type"
  | "resolve"
  | "name"
  | "version"
  | "pluginOptions___includePaths"
  | "pluginOptions___cssLoaderOptions___localsConvention"
  | "pluginOptions___cssLoaderOptions___camelCase"
  | "pluginOptions___name"
  | "pluginOptions___path"
  | "pluginOptions___pathCheck"
  | "nodeAPIs"
  | "browserAPIs"
  | "ssrAPIs"
  | "pluginFilepath"
  | "packageJson___name"
  | "packageJson___description"
  | "packageJson___version"
  | "packageJson___main"
  | "packageJson___license"
  | "packageJson___dependencies"
  | "packageJson___dependencies___name"
  | "packageJson___dependencies___version"
  | "packageJson___devDependencies"
  | "packageJson___devDependencies___name"
  | "packageJson___devDependencies___version"
  | "packageJson___peerDependencies"
  | "packageJson___peerDependencies___name"
  | "packageJson___peerDependencies___version"
  | "packageJson___keywords"

type GQLSitePluginFilterInput = {
  id?: Maybe<GQLStringQueryOperatorInput>
  parent?: Maybe<GQLNodeFilterInput>
  children?: Maybe<GQLNodeFilterListInput>
  internal?: Maybe<GQLInternalFilterInput>
  resolve?: Maybe<GQLStringQueryOperatorInput>
  name?: Maybe<GQLStringQueryOperatorInput>
  version?: Maybe<GQLStringQueryOperatorInput>
  pluginOptions?: Maybe<GQLSitePluginPluginOptionsFilterInput>
  nodeAPIs?: Maybe<GQLStringQueryOperatorInput>
  browserAPIs?: Maybe<GQLStringQueryOperatorInput>
  ssrAPIs?: Maybe<GQLStringQueryOperatorInput>
  pluginFilepath?: Maybe<GQLStringQueryOperatorInput>
  packageJson?: Maybe<GQLSitePluginPackageJsonFilterInput>
}

type GQLSitePluginGroupConnection = {
  totalCount: Scalars["Int"]
  edges: Array<GQLSitePluginEdge>
  nodes: Array<GQLSitePlugin>
  pageInfo: GQLPageInfo
  field: Scalars["String"]
  fieldValue?: Maybe<Scalars["String"]>
}

type GQLSitePluginPackageJson = {
  name?: Maybe<Scalars["String"]>
  description?: Maybe<Scalars["String"]>
  version?: Maybe<Scalars["String"]>
  main?: Maybe<Scalars["String"]>
  license?: Maybe<Scalars["String"]>
  dependencies?: Maybe<Array<Maybe<GQLSitePluginPackageJsonDependencies>>>
  devDependencies?: Maybe<Array<Maybe<GQLSitePluginPackageJsonDevDependencies>>>
  peerDependencies?: Maybe<
    Array<Maybe<GQLSitePluginPackageJsonPeerDependencies>>
  >
  keywords?: Maybe<Array<Maybe<Scalars["String"]>>>
}

type GQLSitePluginPackageJsonDependencies = {
  name?: Maybe<Scalars["String"]>
  version?: Maybe<Scalars["String"]>
}

type GQLSitePluginPackageJsonDependenciesFilterInput = {
  name?: Maybe<GQLStringQueryOperatorInput>
  version?: Maybe<GQLStringQueryOperatorInput>
}

type GQLSitePluginPackageJsonDependenciesFilterListInput = {
  elemMatch?: Maybe<GQLSitePluginPackageJsonDependenciesFilterInput>
}

type GQLSitePluginPackageJsonDevDependencies = {
  name?: Maybe<Scalars["String"]>
  version?: Maybe<Scalars["String"]>
}

type GQLSitePluginPackageJsonDevDependenciesFilterInput = {
  name?: Maybe<GQLStringQueryOperatorInput>
  version?: Maybe<GQLStringQueryOperatorInput>
}

type GQLSitePluginPackageJsonDevDependenciesFilterListInput = {
  elemMatch?: Maybe<GQLSitePluginPackageJsonDevDependenciesFilterInput>
}

type GQLSitePluginPackageJsonFilterInput = {
  name?: Maybe<GQLStringQueryOperatorInput>
  description?: Maybe<GQLStringQueryOperatorInput>
  version?: Maybe<GQLStringQueryOperatorInput>
  main?: Maybe<GQLStringQueryOperatorInput>
  license?: Maybe<GQLStringQueryOperatorInput>
  dependencies?: Maybe<GQLSitePluginPackageJsonDependenciesFilterListInput>
  devDependencies?: Maybe<
    GQLSitePluginPackageJsonDevDependenciesFilterListInput
  >
  peerDependencies?: Maybe<
    GQLSitePluginPackageJsonPeerDependenciesFilterListInput
  >
  keywords?: Maybe<GQLStringQueryOperatorInput>
}

type GQLSitePluginPackageJsonPeerDependencies = {
  name?: Maybe<Scalars["String"]>
  version?: Maybe<Scalars["String"]>
}

type GQLSitePluginPackageJsonPeerDependenciesFilterInput = {
  name?: Maybe<GQLStringQueryOperatorInput>
  version?: Maybe<GQLStringQueryOperatorInput>
}

type GQLSitePluginPackageJsonPeerDependenciesFilterListInput = {
  elemMatch?: Maybe<GQLSitePluginPackageJsonPeerDependenciesFilterInput>
}

type GQLSitePluginPluginOptions = {
  includePaths?: Maybe<Array<Maybe<Scalars["String"]>>>
  cssLoaderOptions?: Maybe<GQLSitePluginPluginOptionsCssLoaderOptions>
  name?: Maybe<Scalars["String"]>
  path?: Maybe<Scalars["String"]>
  pathCheck?: Maybe<Scalars["Boolean"]>
}

type GQLSitePluginPluginOptionsCssLoaderOptions = {
  localsConvention?: Maybe<Scalars["String"]>
  camelCase?: Maybe<Scalars["Boolean"]>
}

type GQLSitePluginPluginOptionsCssLoaderOptionsFilterInput = {
  localsConvention?: Maybe<GQLStringQueryOperatorInput>
  camelCase?: Maybe<GQLBooleanQueryOperatorInput>
}

type GQLSitePluginPluginOptionsFilterInput = {
  includePaths?: Maybe<GQLStringQueryOperatorInput>
  cssLoaderOptions?: Maybe<
    GQLSitePluginPluginOptionsCssLoaderOptionsFilterInput
  >
  name?: Maybe<GQLStringQueryOperatorInput>
  path?: Maybe<GQLStringQueryOperatorInput>
  pathCheck?: Maybe<GQLBooleanQueryOperatorInput>
}

type GQLSitePluginSortInput = {
  fields?: Maybe<Array<Maybe<GQLSitePluginFieldsEnum>>>
  order?: Maybe<Array<Maybe<GQLSortOrderEnum>>>
}

type GQLSiteSiteMetadata = {
  title?: Maybe<Scalars["String"]>
  description?: Maybe<Scalars["String"]>
  siteUrl?: Maybe<Scalars["String"]>
}

type GQLSiteSiteMetadataFilterInput = {
  title?: Maybe<GQLStringQueryOperatorInput>
  description?: Maybe<GQLStringQueryOperatorInput>
  siteUrl?: Maybe<GQLStringQueryOperatorInput>
}

type GQLSiteSortInput = {
  fields?: Maybe<Array<Maybe<GQLSiteFieldsEnum>>>
  order?: Maybe<Array<Maybe<GQLSortOrderEnum>>>
}

type GQLSortOrderEnum = "ASC" | "DESC"

type GQLStringQueryOperatorInput = {
  eq?: Maybe<Scalars["String"]>
  ne?: Maybe<Scalars["String"]>
  in?: Maybe<Array<Maybe<Scalars["String"]>>>
  nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  regex?: Maybe<Scalars["String"]>
  glob?: Maybe<Scalars["String"]>
}

type GQLGatsbyImageSharpFixedFragment = Pick<
  GQLImageSharpFixed,
  "base64" | "width" | "height" | "src" | "srcSet"
>

type GQLGatsbyImageSharpFixed_TracedSvgFragment = Pick<
  GQLImageSharpFixed,
  "tracedSVG" | "width" | "height" | "src" | "srcSet"
>

type GQLGatsbyImageSharpFixed_WithWebpFragment = Pick<
  GQLImageSharpFixed,
  "base64" | "width" | "height" | "src" | "srcSet" | "srcWebp" | "srcSetWebp"
>

type GQLGatsbyImageSharpFixed_WithWebp_TracedSvgFragment = Pick<
  GQLImageSharpFixed,
  "tracedSVG" | "width" | "height" | "src" | "srcSet" | "srcWebp" | "srcSetWebp"
>

type GQLGatsbyImageSharpFixed_NoBase64Fragment = Pick<
  GQLImageSharpFixed,
  "width" | "height" | "src" | "srcSet"
>

type GQLGatsbyImageSharpFixed_WithWebp_NoBase64Fragment = Pick<
  GQLImageSharpFixed,
  "width" | "height" | "src" | "srcSet" | "srcWebp" | "srcSetWebp"
>

type GQLGatsbyImageSharpFluidFragment = Pick<
  GQLImageSharpFluid,
  "base64" | "aspectRatio" | "src" | "srcSet" | "sizes"
>

type GQLGatsbyImageSharpFluidLimitPresentationSizeFragment = {
  maxHeight: GQLImageSharpFluid["presentationHeight"]
  maxWidth: GQLImageSharpFluid["presentationWidth"]
}

type GQLGatsbyImageSharpFluid_TracedSvgFragment = Pick<
  GQLImageSharpFluid,
  "tracedSVG" | "aspectRatio" | "src" | "srcSet" | "sizes"
>

type GQLGatsbyImageSharpFluid_WithWebpFragment = Pick<
  GQLImageSharpFluid,
  | "base64"
  | "aspectRatio"
  | "src"
  | "srcSet"
  | "srcWebp"
  | "srcSetWebp"
  | "sizes"
>

type GQLGatsbyImageSharpFluid_WithWebp_TracedSvgFragment = Pick<
  GQLImageSharpFluid,
  | "tracedSVG"
  | "aspectRatio"
  | "src"
  | "srcSet"
  | "srcWebp"
  | "srcSetWebp"
  | "sizes"
>

type GQLGatsbyImageSharpFluid_NoBase64Fragment = Pick<
  GQLImageSharpFluid,
  "aspectRatio" | "src" | "srcSet" | "sizes"
>

type GQLGatsbyImageSharpFluid_WithWebp_NoBase64Fragment = Pick<
  GQLImageSharpFluid,
  "aspectRatio" | "src" | "srcSet" | "srcWebp" | "srcSetWebp" | "sizes"
>

type GQLGatsbyImageSharpResolutionsFragment = Pick<
  GQLImageSharpResolutions,
  "base64" | "width" | "height" | "src" | "srcSet"
>

type GQLGatsbyImageSharpResolutions_TracedSvgFragment = Pick<
  GQLImageSharpResolutions,
  "tracedSVG" | "width" | "height" | "src" | "srcSet"
>

type GQLGatsbyImageSharpResolutions_WithWebpFragment = Pick<
  GQLImageSharpResolutions,
  "base64" | "width" | "height" | "src" | "srcSet" | "srcWebp" | "srcSetWebp"
>

type GQLGatsbyImageSharpResolutions_WithWebp_TracedSvgFragment = Pick<
  GQLImageSharpResolutions,
  "tracedSVG" | "width" | "height" | "src" | "srcSet" | "srcWebp" | "srcSetWebp"
>

type GQLGatsbyImageSharpResolutions_NoBase64Fragment = Pick<
  GQLImageSharpResolutions,
  "width" | "height" | "src" | "srcSet"
>

type GQLGatsbyImageSharpResolutions_WithWebp_NoBase64Fragment = Pick<
  GQLImageSharpResolutions,
  "width" | "height" | "src" | "srcSet" | "srcWebp" | "srcSetWebp"
>

type GQLGatsbyImageSharpSizesFragment = Pick<
  GQLImageSharpSizes,
  "base64" | "aspectRatio" | "src" | "srcSet" | "sizes"
>

type GQLGatsbyImageSharpSizes_TracedSvgFragment = Pick<
  GQLImageSharpSizes,
  "tracedSVG" | "aspectRatio" | "src" | "srcSet" | "sizes"
>

type GQLGatsbyImageSharpSizes_WithWebpFragment = Pick<
  GQLImageSharpSizes,
  | "base64"
  | "aspectRatio"
  | "src"
  | "srcSet"
  | "srcWebp"
  | "srcSetWebp"
  | "sizes"
>

type GQLGatsbyImageSharpSizes_WithWebp_TracedSvgFragment = Pick<
  GQLImageSharpSizes,
  | "tracedSVG"
  | "aspectRatio"
  | "src"
  | "srcSet"
  | "srcWebp"
  | "srcSetWebp"
  | "sizes"
>

type GQLGatsbyImageSharpSizes_NoBase64Fragment = Pick<
  GQLImageSharpSizes,
  "aspectRatio" | "src" | "srcSet" | "sizes"
>

type GQLGatsbyImageSharpSizes_WithWebp_NoBase64Fragment = Pick<
  GQLImageSharpSizes,
  "aspectRatio" | "src" | "srcSet" | "srcWebp" | "srcSetWebp" | "sizes"
>

type GQLPagesQueryQueryVariables = Exact<{ [key: string]: never }>

type GQLPagesQueryQuery = {
  allSitePage: { nodes: Array<Pick<GQLSitePage, "path">> }
}

type GQLPageQueryQueryVariables = Exact<{ [key: string]: never }>

type GQLPageQueryQuery = {
  site?: Maybe<{
    siteMetadata?: Maybe<Pick<GQLSiteSiteMetadata, "title" | "siteUrl">>
  }>
}
