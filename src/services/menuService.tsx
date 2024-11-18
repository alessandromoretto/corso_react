import {Section} from "../lib/interfaces.ts";

export function fetchMenu(): Section[] {
    return [
        {
            title: 'Summer Menu Items',
            subTitle: <p>Our chef has been busy putting together the perfect menu for the summer months.
                Stop by to try these appetizers and main courses while the days are still long.</p>,
            author: 'BGB',
            publishDate: new Date(),
            menuSubSections: [
                {
                    title: 'Appetizers',
                    plates: [
                        {
                            plateTitle: 'Black bean purses',
                            plateDescription: 'Spicy black bean and a blend of Mexican cheeses wrapped in sheets of phyl-lo and baked until golden.',
                            price: 3.95,
                            isNew: false
                        },
                        {
                            plateTitle: 'Southwestern napoleons with lump crab',
                            plateDescription: 'Layers of light lump crab meat, bean and corn salsa, and our homemade flour tortillas',
                            price: 7.95,
                            isNew: true
                        }
                    ]
                },
                {
                    title: 'Main courses',
                    plates: [
                        {
                            plateTitle: 'Shrimp sate kebabs with peanut sauce',
                            plateDescription: 'Skewers of shrimp marinated in lemongrass, garlic and fish sauce then grilled to perfection. Served with spicy peanut sauce and Jasmine rice. ',
                            price: 12.95,
                            isNew: false
                        },
                        {
                            plateTitle: 'Jerk roitisserie chicken with fried plantains',
                            plateDescription: 'tender chicken slow-roasted on the rotisserie, flavored with spicy and fragrant jerk sauce and served with fried plantains and fresh mango.',
                            price: 12.95,
                            isNew: true
                        }
                    ]
                }
            ]
        },
        {
            title: 'Low and Slow',
            subTitle:

                <>
                    <p>
                        This week I am <em>extremely</em> excited about a new cooking technique called <em>sous vide</em>. In <em>sous vide</em> cooking, you submerge the food (usually vacuum-sealed in platic) into a water bath
                        that is precisely set to the target temperature you want the food to be cooked to.
                        <br/>
                        In his book, <em>Cooking for Geeks</em>, Jeff Potter describes it as "ultra-low-temperature poaching".
                    </p>
                    <p>
                        Next month, we will be serving <strong><em>Sous vide</em> Salmon with Dill Hollandaise</strong>. To reserve a seat at the chef table, contact us before November 30.
                    </p>
                </>    ,
            author: 'BGB',
            publishDate: new Date(),
            menuSubSections: []
        }
    ]
}