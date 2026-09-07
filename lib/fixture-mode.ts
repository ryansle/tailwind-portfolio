// One build-time flag keeps server content and browser submission behavior aligned.
export const isFixtureMode = () => process.env.NEXT_PUBLIC_FIXTURE_MODE === 'true';
