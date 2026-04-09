import { BasicType } from "./BasicType"
import { ChildrenRenderingInList } from "./ChildrenRenderingInList"
import { ConditionList } from "./ConidtionList"
import { DynamicApiRendering } from "./DynamicApiRendering"
import { FilterMapRendering } from "./FilterMapRendering"
import { NestedList } from "./NestedList"
import { RenderingObjectTypes } from "./RenderingObjectTypes"

export const ListRenderingListItem = () => {
    return (
        <>
        <h1 className="font-bold text-xl">List Rendering</h1>
            <div className="card grid grid-cols-3 gap-2">
                <BasicType />
                <RenderingObjectTypes />
                <ConditionList />
                <FilterMapRendering />
                <NestedList />
            
               <ChildrenRenderingInList> 
                    <p>Item One</p>
                    <p>Item Two</p>
                    <p>Item Three</p>
                </ChildrenRenderingInList>

                <DynamicApiRendering/>
            </div>
      </>      
    )
}

// There are different types of list rendering in React such as basic array rendering using map, rendering objects with keys,
// conditional rendering, filtered lists, nested lists, and rendering components. In real-world applications,
// we mostly use API-based dynamic rendering with proper key handling