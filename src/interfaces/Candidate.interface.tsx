// TODO: Create an interface for the Candidate objects returned by the API
/* interface Candidate {
    login: string;
    id: number;
    node_id: string;
    avatar_url: string;
    gravatar_id: string;
    url: string;
    html_url: string;
    followers_url: string;
    following_url: string;
    gists_url: string;
    starred_url: string;
    subscriptions_url: string;
    organizations_url: string;
    repos_url: string;
    events_url: string;
    received_events_url: string;
    type: string;
    site_admin: boolean;
    name?: string;             // Optional property
    company?: string;          // Optional property
    blog?: string;             // Optional property
    location?: string;         // Optional property
    email?: string;            // Optional property
    hireable?: boolean | null; // Optional property
    bio?: string;              // Optional property
    twitter_username?: string; // Optional property
    public_repos?: number;     // Optional property
    public_gists?: number;     // Optional property
    followers?: number;        // Optional property
    following?: number;        // Optional property
    created_at?: string;       // Optional property
    updated_at?: string;       // Optional property
}
*/

interface Candidate {
    login: string;
    id: number;
    node_id: string;
    avatar_url: string;
    gravatar_id: string;
    url: string;
    html_url: string;
    followers_url: string;
    following_url: string;
    gists_url: string;
    starred_url: string;
    subscriptions_url: string;
    organizations_url: string;
    repos_url: string;
    events_url: string;
    received_events_url: string;
    type: string;
    site_admin: boolean;
    name: string | null;              // Added 'null' for optional properties
    company: string | null;           // Added 'null' for optional properties
    blog: string | null;              // Added 'null' for optional properties
    location: string | null;          // Added 'null' for optional properties
    email: string | null;             // Added 'null' for optional properties
    hireable: boolean | null;         // Added 'null' for optional properties
    bio: string | null;               // Added 'null' for optional properties
    twitter_username: string | null;  // Added 'null' for optional properties
    public_repos: number;
    public_gists: number;
    followers: number;
    following: number;
    created_at: string;
    updated_at: string;
}

export default Candidate;