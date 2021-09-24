export const baseURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/tofusAnime`;
export const commentURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/comments`;
export const config = {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
          },
        };