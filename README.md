# Link Shortener Network `lisonet`

> Short link with `middle tier` encryption. It is a technique on the World Wide Web in which a Uniform Resource Locator (URL) may be made substantially shorter and still direct to the required page.

![lisonet](https://github.com/devhasibulislam/lisonet-template/blob/master/public/url-shortener.png?raw=true)

#

![lisonet-overview](https://github.com/devhasibulislam/lisonet-template/blob/master/public/url-shortener-overview.png?raw=true)

## `API` Endpoints

#### Create new meta `slug`

```http
  GET /api/insertData
```

| Parameter | Type   | Description  |
| :-------- | :----- | :----------- |
| `none`    | `null` | **Nothing**. |

#### Get all `slugs`

```http
  GET /api/getAllData
```

| Parameter | Type   | Description  |
| :-------- | :----- | :----------- |
| `none`    | `null` | **Nothing**. |

#### Get redirected `slug`

```http
  GET /api/${slug}
```

| Parameter | Type     | Description                           |
| :-------- | :------- | :------------------------------------ |
| `slug`    | `string` | **Required**. `Slug` of item to fetch |

## Tech Stack

- Framework: `Next.JS`
- Styling: `Tailwind CSS`
- Icons: `Hero JSX Icons`
- Database: `MongoDB`
- Linting: `ESLint`
- Formatter: `Prettier`

## Technologies

| Package Name | Package Version |
| ------------ | --------------- |
| Axios        | ^1.5.0          |
| Cheerio      | ^1.0.0-rc.12    |
| MongoDB      | ^6.1.0          |

## Clone `repository`

```bash
git clone https://github.com/devhasibulislam/lisonet-template.git
cd lisonet-template
yarn
```

## Setup `.env.local`

```bash
DB_URI="YOUR_MONGODB_ATLAS_URI"
```

## Deployment

- [x] Vercel - [Click Here](https://lisonet-template.vercel.app)

# Author

> Hasibul Islam • `devhasibulislam`

![devhasibulislam](https://github.com/devhasibulislam/lisonet-template/blob/master/public/social-links.png?raw=true)
